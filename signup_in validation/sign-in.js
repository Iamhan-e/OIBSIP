
const eye = document.querySelectorAll('.eye');
const passwordInput = document.getElementById('password-in');

function checkData() {
    const email = document.getElementById('email-in');
    const signInEmail = email.value;
    const signInPassword = passwordInput.value;
    const userList = JSON.parse(localStorage.getItem('userList')) || [];

    let userFound = false;
    let passwordMismatch = false;

    userList.forEach(user => {
        if (user.email === signInEmail) {
            if (user.pwd === signInPassword) {
                userFound = true;
            } else {
                // Set password mismatch error flag
                passwordMismatch = true;
            }
        }
    });

    if (userFound) {
        alert('Successful sign in');
        openNewTab('http://127.0.0.1:5501/welcome.html'); 
    } else if (passwordMismatch) {
        // Display password mismatch error
        alert('Incorrect password');
    } else {
        // Email not found error
        alert('Email not found. Register first');
    }
}

function openNewTab(url) {
    const newTab = window.open(url, '_blank');
    if (newTab) {
        newTab.focus();
    }
}



eye.forEach(icon => {
    icon.addEventListener('click', () => {
        if (passwordInput.type === 'text') {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});
