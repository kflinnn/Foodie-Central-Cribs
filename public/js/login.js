const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.getElementById("username-login").value.trim();
  const password = document.getElementById("username-login").value.trim();
console.log(username);
console.log(password);
  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
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

const signupFormHandler = async (event) => {
  event.preventDefault();

  const signupUsername = document.querySelector('#signup-username-input').value.trim();
  const signupPassword = document.querySelector('#signup-password-input').value.trim();

  if (signupUsername && signupPassword) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ signupUsername, signupPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.signup')
  .addEventListener('click', signupFormHandler);
