const createRecipe = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.getElementById('recipe-name').value.trim();
    const description = document.getElementById('recipe-desc').value.trim();
    const ingredients = document.getElementById('recipe-ingredients').value.trim();
    const instructions = document.getElementById('recipe-instructions').value.trim();

  
    if (title && description && ingredients && instructions) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, instructions}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("success!")
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

document
.getElementById('submit-recipe-btn')
.addEventListener('click', createRecipe);