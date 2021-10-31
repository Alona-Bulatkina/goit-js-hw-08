import throttle from 'lodash.throttle';

const LOCALSSTORAGE_KEY = 'feedback-form-state'
const filterForm = document.querySelector('.feedback-form');

initForm();

filterForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(filterForm);
    formData.forEach((value, name) => console.log(value, name));
});

function onFilterFormChange (evt) {
let persistedFilters = localStorage.getItem(LOCALSSTORAGE_KEY);
persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
persistedFilters[evt.target.name] = evt.target.value;
localStorage.setItem(LOCALSSTORAGE_KEY, JSON.stringify(persistedFilters));
};

filterForm.addEventListener('change', throttle(onFilterFormChange, 500));

function initForm () {
    let persistedFilters = localStorage.getItem(LOCALSSTORAGE_KEY);
    if (persistedFilters) {
        persistedFilters = JSON.parse(persistedFilters);
        Object.entries(persistedFilters).forEach(([name, value]) => {
        filterForm.elements[name].value = value;
    });
    };
};