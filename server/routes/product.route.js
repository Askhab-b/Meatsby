const { Router } = require('express');
const { productController } = require('../controllers/product.controllers');
const router = Router();
const fileMiddleware = require('../middleware/file');

router.post('/product', fileMiddleware.single('img'), productController.postProduct)
      .get('/product', productController.getAllProducts)
      .get('/product/:id', productController.getProductById)
      .delete('/product/:id', productController.deleteProductById)
      .patch('/product/:id', productController.patchProduct)

module.exports = router;
