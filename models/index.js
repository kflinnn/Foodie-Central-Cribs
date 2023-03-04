const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});

//Future development - adding comments to recipe
// Comment.belongsTo(Recipe, {
//   foreignKey: 'recipe_id'
// });

// Recipe.hasMany(Comment, {
//   foreignKey: 'recipe_id',
//   onDelete: 'CASCADE'
// })

module.exports = { User, Recipe };

