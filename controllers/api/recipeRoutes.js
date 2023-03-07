const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');
let recipes = []

//GET all recipes
router.get('/', async (req, res) => {
  console.log("get recipes is running!");
  try {
    const recipeData = await Recipe.findAll();
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET a single recipe

router.get('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// CREATE a recipe
router.post('/', withAuth, async (req, res) => {
  // res.send("success!");
  console.log("you've posted!");
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});


//DELETE a recipe
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
