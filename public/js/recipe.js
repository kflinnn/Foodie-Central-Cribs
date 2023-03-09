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




 