const CreateRecipe = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#').value.trim();
    const userName = document.querySelector('#').value.trim();
    const description = document.querySelector('#').value.trim();
    const ingredients = document.querySelector('#').value.trim();
    const instructions = document.querySelector('#').value.trim();



  
    if (title && userName && description && ingredients && instructions) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/recipes', {
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