const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

function toggleLoginButton() {
    if (emailInput.value && passwordInput.value) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

emailInput.addEventListener('input', toggleLoginButton);
passwordInput.addEventListener('input', toggleLoginButton);