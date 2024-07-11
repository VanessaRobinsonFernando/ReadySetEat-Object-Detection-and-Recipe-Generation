let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function handleLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        console.log(data.message);
        window.location.href = '/index';  // Redirect to appropriate page after successful login
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed. Please check your credentials.');
    });
}

document.querySelector('.signup-btn').addEventListener('click', handleSignup);

function handleSignup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            confirm_password: confirmPassword
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Signup successful') {
            window.location.href = `/profile?email=${encodeURIComponent(data.email)}`;
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.login-btn').addEventListener('click', handleLogin);
    document.querySelector('.signup-btn').addEventListener('click', handleSignup);
});
