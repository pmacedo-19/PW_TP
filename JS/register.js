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

  if (!email.length) alert("Must insert an e-mail!");
  else if (username.length < 5 || username.length > 15) alert("Username must have 5-15 characters!");
  else if (password === "") alert("Must choose a password!");
  else if (password !== password2) alert("Passwords don't match!");
  else {
    alert("Registration Successfull");
    window.location.href = "/html/home.html";
  }
});
