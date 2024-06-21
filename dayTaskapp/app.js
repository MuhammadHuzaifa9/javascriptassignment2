const loginForm = document.getElementById('login-form');

    // Add an event listener for form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get the username and password values
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Check if the username and password are correct
     if (username === 'huzaifa@gmail.com' && password === '1234') {
        // Redirect to the login.html page
        window.location.href = 'logedin.html';
      }
      else if (username === 'rafatullah' && password === '12173') {
        // Redirect to the login.html page
        window.location.href = 'logedin.html';
      }
      else if (username === 'tahir' && password === '12174') {
        // Redirect to the login.html page
        window.location.href = 'logedin.html';
      }
      else {
        alert('Invalid username or password. Please try again.');
      }
    });

    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
    });
    function redirect(){
        window.location.href='login.html';
    }