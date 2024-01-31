const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const db = require('../../config/db');
require('dotenv').config();

// 파일 업로드를 위한 하수 정의
const upload = multer({
  dest: '../../src/profileimages/',
  limits: { fileSize: 10 * 512 * 512 }, // 10mb 제한
  fileFilter: (req, file, cb) => {
      if (!file.mimetype.startsWith('image/')) {
          return cb(new Error('사진 파일만 첨부하세요.'), false);
      };
      cb(null, true);
  }
});

// - 최초 회원가입시 정보 post 여기다 하기 (예정)
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
  SELECT * FROM users u WHERE u.id = ?
  `;
  const userId = req.params.id
  try {
    const [row, fields] = await db.query(sql, [userId]);

    res.json({ users: row });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', upload.single('profileImage'), (req, res) => {
  const userId = req.params.id;
  const { userName, interestPosition, interestArea, selfDescription } = req.body;
  const profileImage = req.file ? req.file.path : null;
  const profileImage2 = profileImage ? `${req.file.filename}` : null;
  console.log(req.file)
  console.log(req.body)
  if (profileImage) {
    db.query(
      'UPDATE users SET userName = ?, profileImage = ?, interestPosition = ?, interestArea = ?, selfDescription = ? WHERE id = ?',
      [userName, profileImage, interestPosition, interestArea, selfDescription, userId],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.redirect('/:id');
        // res.status(200).json({ message: 'User updated successfully' });
      }
    );
  } else {
    db.query(
      'UPDATE users SET userName = ?, interestPosition = ?, interestArea = ?, selfDescription = ? WHERE id = ?',
      [userName, interestPosition, interestArea, selfDescription, userId],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.redirect('/:id');
        // res.status(200).json({ message: 'User updated successfully' });
      }
    );
  }
});

router.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '..', '..', 'src', 'profileimages', profileImage2);
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(filepath);
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
