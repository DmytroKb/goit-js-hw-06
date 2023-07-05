const formEl = document.querySelector('.login-form') 

formEl.addEventListener('submit', handlerSubmit);

const user = { 
};

function handlerSubmit(evt) {
    evt.preventDefault(); 
    const {
        elements: { email, password }
    } = evt.currentTarget;
    if (!email.value.length || !password.value.length) { 
        alert('Увага всі поля повинні бути заповнені !!!') 
    } else {
        user.email = `${email.value}`; 
        user.password = `${password.value}`; 
        console.log(user);
        formEl.reset() 
    };
}
