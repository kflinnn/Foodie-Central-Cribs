//function to view selected recipe - this does not work
const selectRecipe = async () => {
    //needs way to collect recipe id
      console.log("You've selected a recipe!");
      const recipeTitle = document.querySelector('#select-recipe').value;
      console.log(recipeTitle);
    
      const response = await fetch('/recipe/:id', {
        method: 'GET',
        headers: { 'Content-Type' : 'application/json'},
      });
    
      if (response.ok) {
        document.location.replace('/recipe/:id');
      } else {
        alert(response.statusText);
      }
    };

//Button to view recipe details
  document
    .getElementById('select-recipe')
    .addEventListener('click', selectRecipe);