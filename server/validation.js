const { body } = require('express-validator')

module.exports.loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 6 символов').isLength({ min: 6 }),
];

module.exports.registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 6 символов').isLength({ min: 6 }),
  body('firstname', 'Укажите имя'),
  body('lastname', 'Укажите фамилие'),
];
