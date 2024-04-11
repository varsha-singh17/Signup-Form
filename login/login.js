const form = document.getElementById('form');
const email = document.getElementById('emaill');
const password = document.getElementById('pass');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const login_error = document.getElementById("login_error")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})
function validateForm() {
    // clearErrors();
    let isValid = true;
    


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

    
    if (isValid) {
        authorize();


    }
}


const authorize = () => {
    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_record.some((v) => {
        return (v.email === email.value && v.password === password.value)

    })) {
        window.location.href = "./welcome.html"
    }
    else {
        login_error.textContent = "Invalid username/password"

    }

}

















