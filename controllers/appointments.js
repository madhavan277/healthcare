const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/doctors', (req, res) => {
  db.all('SELECT * FROM doctors', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/book', (req, res) => {
  const { doctor_id, patient, date } = req.body;
  db.run(
    'INSERT INTO appointments (doctor_id, patient, date) VALUES (?, ?, ?)',
    [doctor_id, patient, date],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
