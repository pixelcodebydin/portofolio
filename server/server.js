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

const upload_graphic_design = multer({ storage_graphic_design });
const upload_illustration = multer({ storage_illustration });

app.use(cors());
app.use(bodyParser.json());

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
    const query = `UPDATE tbl_komentar SET status_komentar = ${status} WHERE id_komentar = ${id}`;
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
    const query = `SELECT * FROM tbl_graphic_design WHERE id_graphic_design = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/graphic-design/kategori-aktif/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_graphic_design WHERE id_graphic_design = ${id} AND status_graphic_design = 1`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
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
    const query = `SELECT * FROM tbl_file_graphic_design WHERE id_graphic_design = ${id} AND status_file_graphic_design = 1`;
    db.query(query, (err, results) => {
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
    const query = `UPDATE tbl_graphic_design SET status_graphic_design = ${status} WHERE id_graphic_design = ${id}`;
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
    const query = `UPDATE tbl_file_graphic_design SET status_file_graphic_design = ${status} WHERE id_file_graphic_design = ${id}`;
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

app.post('/api/graphic-design/tambah/file', upload_graphic_design.single('file_graphic_design'), (req, res) => {
    const { id_graphic_design } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const query = `
        INSERT INTO tbl_file_graphic_design (id_graphic_design, file_graphic_design, status_file_graphic_design)
        VALUES (?, ?, 1)
    `;

    db.query(query, [id_graphic_design, file.filename], (err, result) => {
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

    const deleteFileGraphicDesignQuery = `DELETE FROM tbl_file_graphic_design WHERE id_graphic_design = ${id}`;
    db.query(deleteFileGraphicDesignQuery, [id], (err, fileResults) => {
        if (err) {
            console.error('Error deleting files related to the graphic design:', err.message);
            return res.status(500).json({ message: 'Failed to delete related files', error: err.message });
        }

        const deleteGraphicDesignQuery = `DELETE FROM tbl_graphic_design WHERE id_graphic_design = ${id}`;
        db.query(deleteGraphicDesignQuery, [id], (err, graphicDesignResults) => {
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
    const query = `SELECT * FROM tbl_illustration WHERE id_illustration = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
            return;
        }
        res.json(results);
    });
});

app.get('/api/ilustrasi/kategori-aktif/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM tbl_illustration WHERE id_illustration = ${id} AND status_illustration = 1`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching category with ID ${id}:`, err.message);
            res.status(500).send({ error: `Failed to fetch category with ID ${id}.` });
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
    const query = `SELECT * FROM tbl_file_illustration WHERE id_illustration = ${id} AND status_file_illustration = 1`;
    db.query(query, (err, results) => {
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
    const query = `UPDATE tbl_illustration SET status_illustration = ${status} WHERE id_illustration = ${id}`;
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
    const query = `UPDATE tbl_file_illustration SET status_file_illustration = ${status} WHERE id_file_illustration = ${id}`;
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

app.post('/api/ilustrasi/tambah/file', upload_illustration.single('file_illustration'), (req, res) => {
    const { id_illustration } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const query = `
        INSERT INTO tbl_file_illustration (id_illustration, file_illustration, status_file_illustration)
        VALUES (?, ?, 1)
    `;

    db.query(query, [id_illustration, file.filename], (err, result) => {
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

    const deleteFileIllustrationQuery = `DELETE FROM tbl_file_illustration WHERE id_illustration = ${id}`;
    db.query(deleteFileIllustrationQuery, [id], (err, fileResults) => {
        if (err) {
            console.error('Error deleting files related to the illustration:', err.message);
            return res.status(500).json({ message: 'Failed to delete related files', error: err.message });
        }

        const deleteIllustrationQuery = `DELETE FROM tbl_illustration WHERE id_illustration = ${id}`;
        db.query(deleteIllustrationQuery, [id], (err, illustrationResults) => {
            if (err) {
                console.error('Error deleting illustration:', err.message);
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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
