const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "user123") {
        alert("You have successfully logged in.");
        window.location.href = '/html/home.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

// Tentativa de login dinamico -- nao conseguimos fazer verificacao com lista em fakeDb.js
/*
const clients = require("./clients");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    for (var i = 0; i < clients.length; i++) 
    {
        if (username == clients[i].username && password == clients[i].password) 
        {
          alert('Successful!');
          window.location.href = '/html/home.html';
          break;
        } 
        else 
        {
          alert('Failed!')
        }
    }
})
*/