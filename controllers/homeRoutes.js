const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

//GET selected recipe details
router.get('/recipe/:id', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const recipeData = await Recipe.findOne({ where: { id: req.params.id } }, {
      attributes: { exclude: ['password'] },
    });

    // const user = userData.get({ plain: true });
    const recipe = recipeData.get({ plain: true });
    console.log(recipeData)
    res.render('selectedRecipe', {
      ...recipe,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route to display user's profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route to display createRecipes.handlebars
router.get('/create-recipe', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    res.render('createRecipe', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET route to show all recipes and display on allRecipe handlebar
router.get('/all-recipes', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('allRecipes', { 
      recipes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//renders the homepage view
router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});



module.exports = router;
