
const eye = document.querySelectorAll('.eye');
const passwordInput = document.getElementById('password-up');
const emailValue = document.getElementById('email-up');

function addData() {
    const usernameInput = document.getElementById('username-up');
    const emailInput = document.getElementById('email-up');
    const passwordInput = document.getElementById('password-up');
    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    
   

    // Check if the email is already registered
    const emailExists = userList.some(user => user.email === emailInput.value);
    if (emailExists) {
        alert('Email is already registered. Please use a different email.');
        return;
    }

    // Check if the username is already taken
    const usernameTaken = userList.some(user => user.username === usernameInput.value);
    if (usernameTaken) {
        setTimeout(alert('Username is already taken. Please choose a different username.'), 2000)
        
        return;
    }

    
    const newUser = {
        username: usernameInput.value,
        email: emailInput.value,
        pwd: passwordInput.value
    };

    // Add the new user to the userList array
    userList.push(newUser);

    // Save the updated userList back to local storage
    localStorage.setItem('userList', JSON.stringify(userList));

    alert('Registration successful');
    
    // Open an external URL in a new tab or window after successful registration
    openNewTab('http://127.0.0.1:5501/welcome.html');
}

function openNewTab(url) {
    const newTab = window.open(url, '_blank');
    if (newTab) {
        newTab.focus();
    }
}




eye.forEach(icon => {
    icon.addEventListener("click", () => {
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

