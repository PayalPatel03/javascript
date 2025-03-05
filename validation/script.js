let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let gender=document.querySelectorAll("input[name='gender']");
let hobby=document.querySelectorAll("input[name='hobby']");


let validate = () => {
    // console.log(email.value);
    // console.log(gender.checked[0]);
    
    //username
    if (username.value.trim() === "") {
        document.querySelector('.userError').classList.remove('d-none');
    }
    else {
        document.querySelector('.userError').classList.add('d-none');
    }

    //email
    if (email.value.trim() === "") {
        document.querySelector('.emailError').classList.remove('d-none');
    }
    else {
        document.querySelector('.emailError').classList.add('d-none');
    }

    //password
    if (password.value.trim() === "") {
        document.querySelector('.passwordError').classList.remove('d-none');
    }
    else {
        document.querySelector('.passwordError').classList.add('d-none');
    }

    //gender
    if(!gender[0].checked && !gender[1].checked){
        document.querySelector('.genderError').classList.remove('d-none');
    }
    else{
        document.querySelector('.genderError').classList.add('d-none');
    }
    //hobby
    if (!hobby[0].checked && !hobby[1].checked) {
        document.querySelector('.hobbyError').classList.remove('d-none')

    }
    else {
        document.querySelector('.hobbyError').classList.add('d-none')

    }
    //date


}
