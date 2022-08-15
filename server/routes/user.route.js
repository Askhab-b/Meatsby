const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { registerValidation, loginValidation } = require('../validation');
const { handleValidationErrors, checkAuth } = require('../utils/index');

const router = Router();

router.post('/register', registerValidation, handleValidationErrors, userController.registerUser)
      .post('/login', loginValidation, handleValidationErrors, userController.doLogin)
      .get('/auth/me', checkAuth, userController.getMe);

module.exports = router;
