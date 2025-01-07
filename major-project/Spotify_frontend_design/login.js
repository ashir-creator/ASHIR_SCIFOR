function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  // Basic authentication logic
  if (username === "testuser" && password === "password123") {
      // Redirect to the homepage
      window.location.href = "index.html";
  } else {
      // Show error messages
      if (!username) {
          document.getElementById('username-error').textContent = "Username is required.";
      } else {
          document.getElementById('username-error').textContent = "";
      }

      if (!password) {
          document.getElementById('password-error').textContent = "Password is required.";
      } else {
          document.getElementById('password-error').textContent = "";
      }

      if (username && password) {
          alert("Invalid username or password.");
      }
  }
}