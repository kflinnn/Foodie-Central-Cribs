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
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', CreateRecipe);