const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");
const usernameErrorMsg = document.getElementById("username-error-msg");
const passwordErrorMsg = document.getElementById("password-error-msg");



registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = registerForm.email.value;
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const password2 = registerForm.password2.value;

    if ( password === password2 && username.length > 5){
        alert("Registration Successfull");
        window.location.href = '/html/home.html';
    }
    else if (username.length < 6){
        alert("Username Invalid!");
    }
    else
    {
        alert("Passwords Don't Match!");
    }
    
})