const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const PORT = 5000;
const multer = require('multer');
const path = require('path');

const storage_graphic_design = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../', 'public', 'image', 'graphic-design'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const storage_illustration = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../', 'public', 'image', 'illustration'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const storage_ui_ux_design = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../', 'public', 'image', 'ui-ux-design'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const storage_photography = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../', 'public', 'image', 'photography'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const storage_web_development = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../', 'public', 'image', 'web-development'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload_graphic_design  = multer({ storage: storage_graphic_design });
const upload_illustration    = multer({ storage: storage_illustration });
const upload_ui_ux_design    = multer({ storage: storage_ui_ux_design });
const upload_photography     = multer({ storage: storage_photography });
const upload_web_development = multer({ storage: storage_web_development });

app.use(cors());
app.use(bodyParser.json());

app.get('/api/count', (req, res) => {
    const query = `
        SELECT 'comment' AS category, COUNT(*) AS count FROM tbl_komentar
        UNION ALL
        SELECT 'graphic_design' AS category, COUNT(*) AS count FROM tbl_file_graphic_design
        UNION ALL
        SELECT 'illustration' AS category, COUNT(*) AS count FROM tbl_file_illustration
        UNION ALL
        SELECT 'ui_ux_design' AS category, COUNT(*) AS count FROM tbl_file_ui_ux_design
        UNION ALL
        SELECT 'photography' AS category, COUNT(*) AS count FROM tbl_photography
        UNION ALL
        SELECT 'web_development' AS category, COUNT(*) AS count FROM tbl_web_development
    `;

    db.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query error' });
        }

        // Transform the result into an object
        const results = rows.reduce((acc, row) => {
            acc[row.category] = row.count;
            return acc;
        }, {});

        res.json(results);
    });
});


app.get('/api/komentar', (req, res) => {
    const query = 'SELECT * FROM tbl_komentar';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching comments:', err.message);
            res.status(500).send({ error: 'Failed to fetch comments.' });
            return;
        }
        res.json(results);
    });
});

app.put('/api/komentar/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_komentar SET status_komentar = ? WHERE id_komentar = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating comment status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Comment not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.get('/api/graphic-design', (req, res) => {
    const query = 'SELECT * FROM tbl_graphic_design';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err.message);
            res.status(500).send({ error: 'Failed to fetch categories.' });
            return;
        }
        res.json(results);
    });
});

app.get('/api/graphic-design/kategori/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_graphic_design WHERE id_graphic_design = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ error: `Category with ID ${id} not found.` });
            return;
        }
        console.log('Database results:', results[0]);
        res.json(results[0]);
    });
});

app.get('/api/graphic-design/aktif', (req, res) => {
    const query = `SELECT * FROM tbl_graphic_design WHERE status_graphic_design = 1`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching the active category:`, err.message);
            res.status(500).send({ error: `Failed to fetch the active category.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/graphic-design/file/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_graphic_design WHERE id_graphic_design = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/graphic-design/file-aktif/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_graphic_design WHERE id_graphic_design = ? AND status_file_graphic_design = 1`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.put('/api/graphic-design/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_graphic_design SET status_graphic_design = ? WHERE id_graphic_design = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating category status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Category not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.put('/api/graphic-design/file/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_file_graphic_design SET status_file_graphic_design = ? WHERE id_file_graphic_design = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating file status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('File not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.post('/api/graphic-design/tambah', (req, res) => {
    const { kategori_graphic_design, deskripsi_graphic_design, link_graphic_design } = req.body;
    if (!kategori_graphic_design || !deskripsi_graphic_design || !link_graphic_design) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `
        INSERT INTO tbl_graphic_design (kategori_graphic_design, deskripsi_graphic_design, link_graphic_design, status_graphic_design)
        VALUES (?, ?, ?, 1)
    `;

    db.query(query, [kategori_graphic_design, deskripsi_graphic_design, link_graphic_design], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.status(201).json({ message: 'Category added successfully', id: result.insertId });
    });
});

app.post('/api/graphic-design/tambah/file/:id', upload_graphic_design.single('file_graphic_design'), (req, res) => {
    const { id } = req.params;
    const file   = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const query = `
        INSERT INTO tbl_file_graphic_design (id_graphic_design, file_graphic_design, status_file_graphic_design)
        VALUES (?, ?, 1)
    `;

    db.query(query, [id, file.filename], (err, result) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'File added successfully', id: result.insertId });
    });
});

app.put('/api/graphic-design/ubah', (req, res) => {
    const { id, kategori_graphic_design, deskripsi_graphic_design, link_graphic_design } = req.body;
    if (!id || !kategori_graphic_design || !deskripsi_graphic_design || !link_graphic_design) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = `
        UPDATE tbl_graphic_design SET kategori_graphic_design = ?, deskripsi_graphic_design = ?, link_graphic_design = ? 
        WHERE id_graphic_design = ?
    `;

    db.query(query, [kategori_graphic_design, deskripsi_graphic_design, link_graphic_design, id], (err, results) => {
        if (err) {
            console.error('Error updating category:', err.message);
            return res.status(500).json({ message: 'Failed to update category.', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found.' });
        }
        res.status(200).json({ message: 'Category updated successfully.' });
    });
});

app.delete('/api/graphic-design/hapus/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const deleteFileQuery = `DELETE FROM tbl_file_graphic_design WHERE id_graphic_design = ?`;
    db.query(deleteFileQuery, [id], (err, fileResults) => {
        if (err) {
            console.error('Error deleting files related to the graphic design:', err.message);
            return res.status(500).json({ message: 'Failed to delete related files', error: err.message });
        }

        const deleteQuery = `DELETE FROM tbl_graphic_design WHERE id_graphic_design = ?`;
        db.query(deleteQuery, [id], (err, graphicDesignResults) => {
            if (err) {
                console.error('Error deleting file:', err.message);
                return res.status(500).json({ message: 'Failed to delete category', error: err.message });
            }
            if (graphicDesignResults.affectedRows === 0) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json({ message: 'Category and related files deleted successfully' });
        });
    });
});

app.delete('/api/graphic-design/hapus/file/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const query = `DELETE FROM tbl_file_graphic_design WHERE id_file_graphic_design = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting file:', err.message);
            return res.status(500).json({ message: 'Failed to delete file', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    });
});

app.get('/api/ilustrasi', (req, res) => {
    const query = 'SELECT * FROM tbl_illustration';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err.message);
            res.status(500).send({ error: 'Failed to fetch categories.' });
            return;
        }
        res.json(results);
    });
});

app.get('/api/ilustrasi/kategori/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_illustration WHERE id_illustration = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ error: `Category with ID ${id} not found.` });
            return;
        }
        console.log('Database results:', results[0]);
        res.json(results[0]);
    });
});

app.get('/api/ilustrasi/aktif', (req, res) => {
    const query = `SELECT * FROM tbl_illustration WHERE status_illustration = 1`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching the active category:`, err.message);
            res.status(500).send({ error: `Failed to fetch the active category.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/ilustrasi/file/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_illustration WHERE id_illustration = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/ilustrasi/file-aktif/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_illustration WHERE id_illustration = ? AND status_file_illustration = 1`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.put('/api/ilustrasi/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_illustration SET status_illustration = ? WHERE id_illustration = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating category status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Category not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.put('/api/ilustrasi/file/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_file_illustration SET status_file_illustration = ? WHERE id_file_illustration = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating file status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('File not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.post('/api/ilustrasi/tambah', (req, res) => {
    const { kategori_illustration, deskripsi_illustration, link_illustration } = req.body;
    if (!kategori_illustration || !deskripsi_illustration || !link_illustration) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `
        INSERT INTO tbl_illustration (kategori_illustration, deskripsi_illustration, link_illustration, status_illustration)
        VALUES (?, ?, ?, 1)
    `;

    db.query(query, [kategori_illustration, deskripsi_illustration, link_illustration], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.status(201).json({ message: 'Category added successfully', id: result.insertId });
    });
});

app.post('/api/ilustrasi/tambah/file/:id', upload_illustration.single('file_illustration'), (req, res) => {
    const { id } = req.params;
    const file   = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const query = `
        INSERT INTO tbl_file_illustration (id_illustration, file_illustration, status_file_illustration)
        VALUES (?, ?, 1)
    `;

    db.query(query, [id, file.filename], (err, result) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'File added successfully', id: result.insertId });
    });
});

app.put('/api/ilustrasi/ubah', (req, res) => {
    const { id, kategori_illustration, deskripsi_illustration, link_illustration } = req.body;
    if (!id || !kategori_illustration || !deskripsi_illustration || !link_illustration) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = `
        UPDATE tbl_illustration SET kategori_illustration = ?, deskripsi_illustration = ?, link_illustration = ? 
        WHERE id_illustration = ?
    `;

    db.query(query, [kategori_illustration, deskripsi_illustration, link_illustration, id], (err, results) => {
        if (err) {
            console.error('Error updating category:', err.message);
            return res.status(500).json({ message: 'Failed to update category.', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found.' });
        }
        res.status(200).json({ message: 'Category updated successfully.' });
    });
});

app.delete('/api/ilustrasi/hapus/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const deleteFileQuery = `DELETE FROM tbl_file_illustration WHERE id_illustration = ?`;
    db.query(deleteFileQuery, [id], (err, fileResults) => {
        if (err) {
            console.error('Error deleting files related to the illustration:', err.message);
            return res.status(500).json({ message: 'Failed to delete related files', error: err.message });
        }

        const deleteQuery = `DELETE FROM tbl_illustration WHERE id_illustration = ?`;
        db.query(deleteQuery, [id], (err, illustrationResults) => {
            if (err) {
                console.error('Error deleting file:', err.message);
                return res.status(500).json({ message: 'Failed to delete category', error: err.message });
            }
            if (illustrationResults.affectedRows === 0) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json({ message: 'Category and related files deleted successfully' });
        });
    });
});

app.delete('/api/ilustrasi/hapus/file/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const query = `DELETE FROM tbl_file_illustration WHERE id_file_illustration = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting file:', err.message);
            return res.status(500).json({ message: 'Failed to delete file', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    });
});

app.get('/api/ui-ux-design', (req, res) => {
    const query = 'SELECT * FROM tbl_ui_ux_design';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err.message);
            res.status(500).send({ error: 'Failed to fetch categories.' });
            return;
        }
        res.json(results);
    });
});

app.get('/api/ui-ux-design/kategori/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_ui_ux_design WHERE id_ui_ux_design = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ error: `Category with ID ${id} not found.` });
            return;
        }
        console.log('Database results:', results[0]);
        res.json(results[0]);
    });
});

app.get('/api/ui-ux-design/aktif', (req, res) => {
    const query = `SELECT * FROM tbl_ui_ux_design WHERE status_ui_ux_design = 1`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching the active category:`, err.message);
            res.status(500).send({ error: `Failed to fetch the active category.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/ui-ux-design/file/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_ui_ux_design WHERE id_ui_ux_design = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/ui-ux-design/file-aktif/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_ui_ux_design WHERE id_ui_ux_design = ? AND status_file_ui_ux_design = 1`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.put('/api/ui-ux-design/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_ui_ux_design SET status_ui_ux_design = ? WHERE id_ui_ux_design = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating category status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Category not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.put('/api/ui-ux-design/file/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_file_ui_ux_design SET status_file_ui_ux_design = ? WHERE id_file_ui_ux_design = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating file status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('File not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.post('/api/ui-ux-design/tambah', (req, res) => {
    const { kategori_ui_ux_design, deskripsi_ui_ux_design, link_ui_ux_design } = req.body;
    if (!kategori_ui_ux_design || !deskripsi_ui_ux_design || !link_ui_ux_design) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `
        INSERT INTO tbl_ui_ux_design (kategori_ui_ux_design, deskripsi_ui_ux_design, link_ui_ux_design, status_ui_ux_design)
        VALUES (?, ?, ?, 1)
    `;

    db.query(query, [kategori_ui_ux_design, deskripsi_ui_ux_design, link_ui_ux_design], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.status(201).json({ message: 'Category added successfully', id: result.insertId });
    });
});

app.post('/api/ui-ux-design/tambah/file/:id', upload_ui_ux_design.single('file_ui_ux_design'), (req, res) => {
    const { id } = req.params;
    const file   = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const query = `
        INSERT INTO tbl_file_ui_ux_design (id_ui_ux_design, file_ui_ux_design, status_file_ui_ux_design)
        VALUES (?, ?, 1)
    `;

    db.query(query, [id, file.filename], (err, result) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'File added successfully', id: result.insertId });
    });
});

app.put('/api/ui-ux-design/ubah', (req, res) => {
    const { id, kategori_ui_ux_design, deskripsi_ui_ux_design, link_ui_ux_design } = req.body;
    if (!id || !kategori_ui_ux_design || !deskripsi_ui_ux_design || !link_ui_ux_design) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = `
        UPDATE tbl_ui_ux_design SET kategori_ui_ux_design = ?, deskripsi_ui_ux_design = ?, link_ui_ux_design = ? 
        WHERE id_ui_ux_design = ?
    `;

    db.query(query, [kategori_ui_ux_design, deskripsi_ui_ux_design, link_ui_ux_design, id], (err, results) => {
        if (err) {
            console.error('Error updating category:', err.message);
            return res.status(500).json({ message: 'Failed to update category.', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found.' });
        }
        res.status(200).json({ message: 'Category updated successfully.' });
    });
});

app.delete('/api/ui-ux-design/hapus/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const deleteFileQuery = `DELETE FROM tbl_file_ui_ux_design WHERE id_ui_ux_design = ?`;
    db.query(deleteFileQuery, [id], (err, fileResults) => {
        if (err) {
            console.error('Error deleting files related to the UI/UX design:', err.message);
            return res.status(500).json({ message: 'Failed to delete related files', error: err.message });
        }

        const deleteQuery = `DELETE FROM tbl_ui_ux_design WHERE id_ui_ux_design = ?`;
        db.query(deleteQuery, [id], (err, uiuxDesignResults) => {
            if (err) {
                console.error('Error deleting file:', err.message);
                return res.status(500).json({ message: 'Failed to delete category', error: err.message });
            }
            if (uiuxDesignResults.affectedRows === 0) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json({ message: 'Category and related files deleted successfully' });
        });
    });
});

app.delete('/api/ui-ux-design/hapus/file/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const query = `DELETE FROM tbl_file_ui_ux_design WHERE id_file_ui_ux_design = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting file:', err.message);
            return res.status(500).json({ message: 'Failed to delete file', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    });
});

app.get('/api/photography', (req, res) => {
    const query = 'SELECT * FROM tbl_photography';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching photos:', err.message);
            res.status(500).send({ error: 'Failed to fetch photos.' });
            return;
        }
        res.json(results);
    });
});

app.get('/api/photography/aktif/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_photography WHERE id_photography = ? AND status_photography = 1`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching photo with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch photo with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.put('/api/photography/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_photography SET status_photography = ? WHERE id_photography = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating photo status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Photo not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.post('/api/photography/tambah', upload_photography.single('file_photography'), (req, res) => {
    const file   = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No photo uploaded or invalid photo format' });
    }

    const query = `
        INSERT INTO tbl_photography (file_photography, status_photography)
        VALUES (?, 1)
    `;

    db.query(query, [file.filename], (err, result) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'Photo added successfully', id: result.insertId });
    });
});

app.delete('/api/photography/hapus/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const query = `DELETE FROM tbl_photography WHERE id_photography = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting photo:', err.message);
            return res.status(500).json({ message: 'Failed to delete photo', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Photo not found' });
        }
        res.status(200).json({ message: 'Photo deleted successfully' });
    });
});

app.get('/api/web-development', (req, res) => {
    const query = 'SELECT * FROM tbl_web_development';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err.message);
            res.status(500).send({ error: 'Failed to fetch categories.' });
            return;
        }
        res.json(results);
    });
});

app.get('/api/web-development/kategori/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_web_development WHERE id_web_development = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ error: `Category with ID ${id} not found.` });
            return;
        }
        console.log('Database results:', results[0]);
        res.json(results[0]);
    });
});

app.get('/api/web-development/aktif', (req, res) => {
    const query = `SELECT * FROM tbl_web_development WHERE status_web_development = 1`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching the active category:`, err.message);
            res.status(500).send({ error: `Failed to fetch the active category.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/web-development/file/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_web_development WHERE id_web_development = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/web-development/file-aktif/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_file_web_development WHERE id_web_development = ? AND status_file_web_development = 1`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Error fetching file with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch file with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.put('/api/web-development/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_web_development SET status_web_development = ? WHERE id_web_development = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating category status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Category not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.put('/api/web-development/file/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_file_web_development SET status_file_web_development = ? WHERE id_file_web_development = ?`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating file status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('File not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.post('/api/web-development/tambah', (req, res) => {
    const { judul_web_development, deskripsi_web_development, link_web_development } = req.body;
    if (!judul_web_development || !deskripsi_web_development || !link_web_development) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `
        INSERT INTO tbl_web_development (judul_web_development, deskripsi_web_development, link_web_development, status_web_development)
        VALUES (?, ?, ?, 1)
    `;

    db.query(query, [judul_web_development, deskripsi_web_development, link_web_development], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.status(201).json({ message: 'Category added successfully', id: result.insertId });
    });
});

app.post('/api/web-development/tambah/file/:id', upload_web_development.single('file_web_development'), (req, res) => {
    const { id } = req.params;
    const file   = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const query = `
        INSERT INTO tbl_file_web_development (id_web_development, file_web_development, status_file_web_development)
        VALUES (?, ?, 1)
    `;

    db.query(query, [id, file.filename], (err, result) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'File added successfully', id: result.insertId });
    });
});

app.put('/api/web-development/ubah', (req, res) => {
    const { id, judul_web_development, deskripsi_web_development, link_web_development } = req.body;
    if (!id || !judul_web_development || !deskripsi_web_development || !link_web_development) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = `
        UPDATE tbl_web_development SET judul_web_development = ?, deskripsi_web_development = ?, link_web_development = ? 
        WHERE id_web_development = ?
    `;

    db.query(query, [judul_web_development, deskripsi_web_development, link_web_development, id], (err, results) => {
        if (err) {
            console.error('Error updating category:', err.message);
            return res.status(500).json({ message: 'Failed to update category.', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found.' });
        }
        res.status(200).json({ message: 'Category updated successfully.' });
    });
});

app.delete('/api/web-development/hapus/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const deleteFileQuery = `DELETE FROM tbl_file_web_development WHERE id_web_development = ?`;
    db.query(deleteFileQuery, [id], (err, fileResults) => {
        if (err) {
            console.error('Error deleting files related to the web development:', err.message);
            return res.status(500).json({ message: 'Failed to delete related files', error: err.message });
        }

        const deleteQuery = `DELETE FROM tbl_web_development WHERE id_web_development = ?`;
        db.query(deleteQuery, [id], (err, webDevelopmentResults) => {
            if (err) {
                console.error('Error deleting file:', err.message);
                return res.status(500).json({ message: 'Failed to delete category', error: err.message });
            }
            if (webDevelopmentResults.affectedRows === 0) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json({ message: 'Category and related files deleted successfully' });
        });
    });
});

app.delete('/api/web-development/hapus/file/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const query = `DELETE FROM tbl_file_web_development WHERE id_file_web_development = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting file:', err.message);
            return res.status(500).json({ message: 'Failed to delete file', error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
