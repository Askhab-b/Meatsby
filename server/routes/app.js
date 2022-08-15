require('dotenv').config();
require('../config/database').connect();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { checkAuth } = require('../utils/index');

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(require('./cart.route'));
app.use(require('./ingredient.route'));
app.use(require('./product.route'));
app.use(require('./user.route'));
app.use(express.json({ limit: '50mb' }));

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads');
    }
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use('/uploads', express.static('uploads'));

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});


app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

module.exports = app;
