// Toggle Day/Night Mode
function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle');
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode');

    // Change button icon based on the theme
    if (body.classList.contains('dark-mode')) {
        themeButton.innerText = '🌞';  // Switch to Sun (Day Mode)
    } else {
        themeButton.innerText = '🌙';  // Switch to Moon (Night Mode)
    }
}

// Toggle between Signup and Login forms
function toggleForms(form) {
    if (form === 'signup') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    } else {
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
}

// Signup form submission handler
function signup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        alert(`Signup Successful! Welcome, ${name}`);
        toggleForms('login');
    } else {
        alert("Please fill in all fields.");
    }
}

// Login form submission handler
function login(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert("Login Successful!");
    } else {
        alert("Please enter both email and password.");
    }
}