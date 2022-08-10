const { Router } = require('express');
const userController = require('../controllers/user.controller');
const router = Router();

router.post('/register', userController.registerUser)
      .post('/login', userController.doLogin)

module.exports = router;
