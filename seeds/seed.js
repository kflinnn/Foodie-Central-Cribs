const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const recipe of recipeData) {
    const user = await User.findOne({ where: { user_name: recipe.user_name } })
    delete recipe.user_name;
    await Recipe.create({
      ...recipe,
      user_id: user.id,
    });
  }

  process.exit(0);
};

seedDatabase();
