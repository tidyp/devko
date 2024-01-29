const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const db = require('../../config/db');
require('dotenv').config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('profileImage'), (req, res) => {
  const { username, email } = req.body;
  const profileImage = req.file ? req.file.filename : null;

  db.query(
    'INSERT INTO users (username, email, profileImage) VALUES (?, ?, ?)',
    [username, email, profileImage],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res
        .status(201)
        .json({
          message: 'User created successfully',
          userId: results.insertId,
        });
    }
  );
});

router.get('/:id', async (req, res) => {
  const sql = `
  SELECT * FROM users
  `;
  try {
    const [row, fields] = await db.query(sql);

    res.json({ users: row });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', upload.single('profileImage'), (req, res) => {
  const userId = req.params.id;
  const { username } = req.body;
  const profileImage = req.file ? req.file.filename : null;
  if (profileImage) {
    db.query(
      'UPDATE users SET userName = ?, profileImage = ? WHERE id = ?',
      [username, profileImage, userId],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(200).json({ message: 'User updated successfully' });
      }
    );
  } else {
    db.query(
      'UPDATE users SET userName = ? WHERE id = ?',
      [username, userId],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(200).json({ message: 'User updated successfully' });
      }
    );
  }
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  });
});

module.exports = router;
