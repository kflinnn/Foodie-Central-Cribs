const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');

//Future development - Comment Section
// const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);

//Future development - Comment Section
// router.use('/', commentRoutes);

module.exports = router;
