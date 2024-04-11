const form = document.getElementById('form');
const email = document.getElementById('emaill');
const password = document.getElementById('pass');
const namee = document.getElementById('myname');
const phone = document.getElementById('num');
const dob = document.getElementById('dob')
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');
const nameError = document.getElementById('nameError');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})
function clearErrors() {
    nameError.innerText = '';
    emailError.innerText = '';
    passwordError.innerText = '';
    phoneError.innerText = '';
}
function validateForm() {
    // clearErrors();
    let isValid = true;
    if (namee.value === "") {
        nameError.textContent = 'Name is required';

        isValid = false;
    }
    else {
        nameError.textContent = '';
    }


    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';

        isValid = false;
    }
    else {
        emailError.textContent = '';
    }
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';

        isValid = false;
    }
    else {
        passwordError.textContent = '';
    }

    if (phone.value.length != 10 || isNaN(phone.value)) {
        phoneError.textContent = 'Please enter a valid phone number';

        isValid = false;
    }
    else {
        phoneError.textContent = '';
    }
    if (isValid) {
        Savedata();


    }
}

const Savedata = () => {
    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_record.some((v) => {
        return v.email == email.value
    })) {
        emailError.textContent = 'Email address already exists';


    }
    else {

        emailError.textContent = '';

        user_record.push({
            "name": namee.value,
            "email": email.value,
            "password": password.value,
            "dob": dob.value,
            "phone": phone.value,


        })

        localStorage.setItem("users", JSON.stringify(user_record))
        window.location.href = "./welcome.html"
    }
}