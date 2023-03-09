
  
//function to view selected recipe
const selectRecipe = async () => {
//needs way to collect recipe id
  console.log("You've selected a recipe!");
  const recipeTitle = document.querySelector('#select-recipe').value;
  console.log(recipeTitle);

  const response = await fetch('/api/recipes/:id', {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
  });

  if (response.ok) {
    document.location.replace('/selectedRecipe');
  } else {
    alert(response.statusText);
  }
};


//function to take user to create recipe form
const goCreate = async () => {
  const response = await fetch('/create-recipe', {
    method: 'GET',
    headers: { 'Content-Type' : 'application/json'},
  });

  if (response.ok) {
    document.location.replace('/create-recipe');
  } else {
    alert(response.statusText);
  }
};


   //Create recipe button to take to createRecipe.handlebars
   document
   .getElementById('create-recipe-btn')
   .addEventListener('click', goCreate);


//Button to view recipe details
  // document
  //   .getElementById('select-recipe')
  //   .addEventListener('click', selectRecipe);

 