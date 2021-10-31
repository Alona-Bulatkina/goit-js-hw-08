import throttle from 'lodash.throttle'


const filterForm = document.querySelector('.feedback-form');
filterForm.addEventListener('submit', evt => {
    evt.preventDefault();
    console.log(filterForm.elements);
})