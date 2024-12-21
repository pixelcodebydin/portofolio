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

app.get('/api/graphicDesign', (req, res) => {
    const query = 'SELECT * FROM tbl_graphic_design';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching designs:', err.message);
            res.status(500).send({ error: 'Failed to fetch designs.' });
            return;
        }
        res.json(results);
    });
});

app.put('/api/graphicDesign/:id/:status', (req, res) => {
    const { id, status } = req.params;
    const query = `UPDATE tbl_graphic_design SET status_graphic_design = ${status} WHERE id_graphic_design = ${id}`;
    db.query(query, [status, id], (err, results) => {
        if (err) {
            console.error('Error updating design status:', err.message);
            res.status(500).send('Server error');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Design not found');
        }
        res.json({ message: 'Status updated successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
