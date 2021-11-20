import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';

const dataRef = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

let formData = {};

dataRef.form.addEventListener('submit', onSubmit);
dataRef.form.addEventListener('input', throttle(onInput, 500)); 

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(dataRef.form);
    formData.forEach((value, name) => console.log(value, name));
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
};

function onInput(event) {
    let persistedInfo = localStorage.getItem(storageKey);
    persistedInfo = persistedInfo ? JSON.parse(persistedInfo) : {};
    persistedInfo[event.target.name] = event.target.value;
    localStorage.setItem(storageKey, JSON.stringify(persistedInfo));
}

function textareaSavedData() {
    const savedMessage = JSON.parse(localStorage.getItem(storageKey));
    
    if (savedMessage && savedMessage.message) {
    dataRef.textarea.value = savedMessage.message;
    };
    
    if (savedMessage && savedMessage.email) {
    dataRef.mail.value = savedMessage.email;
    };
    
 };

textareaSavedData();