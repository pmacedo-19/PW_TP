const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");
const usernameErrorMsg = document.getElementById("username-error-msg");
const passwordErrorMsg = document.getElementById("password-error-msg");


function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a username.\n";
        alert(error);
        return true;
 
    } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        fld.style.background = 'Yellow';
        error = "The username is the wrong length.\n";
		alert(error);
		return true;
 
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "The username contains illegal characters.\n";
		alert(error);
		return true;
 
    } else {
        fld.style.background = 'White';
    }
    return false;
}


registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = registerForm.email.value;
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const password2 = registerForm.password2.value;

    var letters = /^[A-Za-z]+$/;

    if ( password === password2 && validateUsername(username)){
        alert("Registration Successfull")
        window.location.href = '/html/home.html';
    }
    else {
        alert("Username Invalid or Passwords don't match!")
    } 
    
})