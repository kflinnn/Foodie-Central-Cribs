const { Recipe } = require("../models");

let recipeDatabase = [
    {
        title: "Peanut Butter and Jelly",
        user_name: "kflinn",
        description: "A simple, classic recipe that is good for any quick meal or snack. Makes one serving",
        ingredients: "2 Slices of Bread, Peanut Butter, Grape (or your flavor choice) Jelly or Jam",
        instructions: "1. Using a knife, spread your desired amount of peanut butter on one of the slices of bread 2. Do the same with the jelly/jam on the other slice of bread 3. Put the two slices together so that the peanut butter side is touching the jelly/jam side 4. Enjoy!"
      },
      {
        title: "BLT",
        user_name: "kflinn",
        description: "A classic sandwich",
        ingredients: "2 slices of Bread, 4 Strips of Cooked Bacon, 1 tomato sliced,  ",
        instructions: "instructions here"
      },
      {
        title: "Another recipe",
        user_name: "kflinn",
        description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
        ingredients: "800",
        instructions: "instructions go here"
      }
]

const seedDatabase = () => Recipe.bulkCreate(recipeDatabase);

module.exports = seedDatabase;


