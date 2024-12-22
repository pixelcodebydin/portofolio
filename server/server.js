const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const PORT = 5000;

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

app.get('/api/ilustrasi/data/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const query = `SELECT * FROM tbl_illustration WHERE id_illustration = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching illustration data:', err.message);
            return res.status(500).json({ message: 'Failed to fetch category data', error: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Category data not found' });
        }

        res.status(200).json(results[0]);
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

app.put('/api/ilustrasi/data/:id/:status', (req, res) => {
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

        res.status(201).json({ message: 'Illustration category added successfully', id: result.insertId });
    });
});

app.put('/api/ilustrasi/ubah', (req, res) => {
    const { id, kategori_illustration, deskripsi_illustration, link_illustration } = req.body;
    if (!id || !kategori_illustration || !deskripsi_illustration || !link_illustration) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = `
        UPDATE tbl_illustration 
        SET kategori_illustration = ?, deskripsi_illustration = ?, link_illustration = ? 
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

app.delete('/api/ilustrasi/data/hapus/:id', (req, res) => {
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

app.delete('/api/ilustrasi/hapus/:id', (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    const query = `DELETE FROM tbl_illustration WHERE id_illustration = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting category:', err.message);
            return res.status(500).json({ message: 'Failed to delete category', error: err.message });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
