const createRecipe = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const user_name = document.querySelector('#username').value.trim();
    const description = document.querySelector('#Description').value.trim();
    const ingredients = document.querySelector('#Ingredients').value.trim();
    const instructions = document.querySelector('#Instructions').value.trim();



  
    if (title && user_name && description && ingredients && instructions) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, user_name, description, ingredients, instructions}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
//function to view selected recipe
const selectRecipe = async () => {
//needs way to collect recipe id

  console.log("You've selected a recipe!");
  const response = await fetch('/api/recipes/:id', {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};


  //need to check to make sure that is the correct query selector for the button
  document
    .querySelector('.login-form')
    .addEventListener('click', createRecipe);

    //Potentially need a function for a button for a user to save any recipe to their kitchen

  document
    .querySelector('.shelf-con')
    .addEventListener('click', selectRecipe);