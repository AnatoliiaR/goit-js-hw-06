
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    const formElements = event.currentTarget.elements;
    event.preventDefault();

// formData.forEach(email, password) => 

    if (formElements.email.value === '' || formElements.password.value === '') {
        return alert('Заповніть, будь ласка, всі поля');
    }
    else {

        const result = { email: formElements.email.value, password: formElements.password.value };
        console.log(result);

        event.currentTarget.reset();
   } 

    }

