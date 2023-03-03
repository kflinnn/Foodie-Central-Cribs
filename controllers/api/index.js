const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/', userRoutes);
router.use('/', recipeRoutes);
router.use('/', commentRoutes);

module.exports = router;
