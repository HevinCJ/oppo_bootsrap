const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const successMessage = document.getElementById('success-message'); 

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let isFormValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isFormValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isFormValid = false;
    } else if (!validateEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isFormValid = false;
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 6 characters');
        isFormValid = false;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        isFormValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Passwords do not match');
        isFormValid = false;
    } else {
        setSuccess(password2);
    }

    if (isFormValid) {
      
        successMessage.innerText = 'Registration successful!';
        successMessage.style.display = 'block'; 

       
        form.reset();

        
        setTimeout(() => {
            const inputControls = document.querySelectorAll('.input-control');
            inputControls.forEach(inputControl => {
                inputControl.classList.remove('success');
            });
            successMessage.style.display = 'none'; // Hide the success message after showing it
        }, 3000); // Adjust the timing as needed
    }
};
