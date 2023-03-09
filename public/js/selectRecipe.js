
//function to view selected recipe - this does not work
const selectRecipe = async (recipeDetails) => {
  //needs way to collect recipe id
  console.log("You've selected a recipe!");
  const recipeTitle = document.querySelector('#select-recipe');
  console.log(recipeTitle);
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
  const response = await fetch(`/recipe/${req.body}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },

  });

  if (response.ok) {
    console.log(response)
    // console.log(body.id)
    document.location.replace(`/recipe/${body.id}`);
  } else {
    alert(response.statusText);
  }
};

//Button to view recipe details
document
  .getElementById('select-recipe')
  .addEventListener('click', selectRecipe);