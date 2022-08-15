const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User.model');

module.exports = userController = {
  registerUser: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;

      const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_ROUNDS));
      const hash = await bcrypt.hash(password, salt);

      const doc = await User.create({
        first_name: firstname,
        last_name: lastname,
        email: email.toLowerCase(),
        passwordHash: hash,
      });

      const user = await doc.save()

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: process.env.SECRET_JWT_EXPIRATION,
        },
      );

      const { passwordHash, ...userData } = user._doc;

      res.json({
        ...userData,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: 'Не удалось зарегистрироваться',
      });
    }
  },
  doLogin: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({
          error: 'Пользователь не найден',
        });
      }

      const isValidPass = await bcrypt.compare(password, user._doc.passwordHash);

      if (!isValidPass) {
        return res.status(400).json({
          error: 'Неверный логин или пароль',
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: process.env.SECRET_JWT_EXPIRATION,
        },
      );

      const { passwordHash, ...userData } = user._doc;

      res.json({
        ...userData,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: 'Не удалось авторизоваться',
      });
    }
  },

  getMe: async (req, res) => {
    try {
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({
          error: 'Пользователь не найден',
        });
      }

      const { passwordHash, ...userData } = user._doc;

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: 'Нет доступа',
      });
    }
  },

}