let email = document.getElementById('email');
let password = document.getElementById('password'); 
let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(email.value);
    if (email.value == 'p6579113@gmail.com') {
        if (password.value == '123') {
            alert("Correct password!");
        } else {
            alert("Invalid password!");
        }
    } else {
        alert("Login failed!");
    }
});
