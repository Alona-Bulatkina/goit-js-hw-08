import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log('feedback-form-state', JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (savedMessage && savedMessage.message) {
    refs.textarea.value = savedMessage.message;
    };
    
    if (savedMessage && savedMessage.email) {
    refs.mail.value = savedMessage.email;
    };
};