const { Router } = require('express');

const { cartController } = require('../controllers/cart.controller');

const router = Router();

router.post('/cart', cartController.postCart)
      .patch('/user/:userId/:id', cartController.addIngredient)
      .patch('/returnPill/:id', cartController.returnIngredient)
      .patch('/user/:id', cartController.clearCart)
      .patch('/user/:userId/cart/:id', cartController.buyProduct)
      .patch('/cash/:userId', cartController.cashRefill)

module.exports = router;
