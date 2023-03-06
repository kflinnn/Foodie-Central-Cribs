const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const user_name = document.getElementById("username-login").value.trim();
  const password = document.getElementById("password-login").value.trim();
console.log(user_name);
console.log(password);
  if (user_name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(await response.text());
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#signup-username-input').value.trim();
  const password = document.querySelector('#signup-password-input').value.trim();

  if (user_name && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(await response.text());
    }
  }
};

document
  .querySelector('#login-btn')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('#signup-btn')
  .addEventListener('click', signupFormHandler);
