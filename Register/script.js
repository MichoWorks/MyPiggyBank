function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For simplicity, you might want to add more robust validation and error handling here

    // Example: Save user information to localStorage
    const user = { username, email, password };
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect to the main page after registration
    window.location.href = 'index.html';
}
