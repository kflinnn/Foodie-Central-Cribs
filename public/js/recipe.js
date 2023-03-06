const CreateRecipe = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const userName = document.querySelector('#username').value.trim();
    const description = document.querySelector('#Description').value.trim();
    const ingredients = document.querySelector('#Ingredients').value.trim();
    const instructions = document.querySelector('#Instructions').value.trim();



  
    if (title && userName && description && ingredients && instructions) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, userName, description, ingredients, instructions}),
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
  

  //need to check to make sure that is the correct query selector for the button
  document
    .querySelector('.login-form')
    .addEventListener('click', CreateRecipe);

    //Potentially need a function for a button for a user to save any recipe to their kitchen