let password = document.getElementById('password');
let email = document.getElementById('email');
let button = document.getElementById('button');


function checkPassword () {
    if (!(password.value.length > 8 && password.value.length < 10)) {
        document.getElementById('textZone').innerHTML += 'La contraseña tiene que ser un texto de longitud entre 8 y 10 caracteres.';
    }
}

function checkEmail () {
    regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex_email.test(email.value) && (password.value.length > 8 && password.value.length < 10)) {
        button.disabled = false;
    }
}

function checkInputs () {
    if (regex_email.test(email.value) && (password.value.length > 8 && password.value.length < 10)) {
        button.disabled = false;
    }
}

function erased () {
    document.getElementById('textZone').innerHTML = '';
}

password.addEventListener('blur', checkPassword); 
password.addEventListener('click', erased);
email.addEventListener('click', erased);
email.addEventListener('blur', checkEmail); 
document.addEventListener('change', checkInputs)
