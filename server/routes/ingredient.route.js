const { Router } = require('express');
const { ingredientController } = require('../controllers/ingredient.controller');
const router = Router();

router.post('/ingredient', ingredientController.postIngredient)
      .get('/ingredient', ingredientController.getAllIngredients)
      .get('/ingredient/:id', ingredientController.getIngredientById)
      .delete('/ingredient/:id', ingredientController.deleteIngredientById)
      .patch('/ingredient/:id', ingredientController.patchIngredient)

module.exports = router;
