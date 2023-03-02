const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/', userRoutes);
router.use('/', recipeRoutes);

module.exports = router;
