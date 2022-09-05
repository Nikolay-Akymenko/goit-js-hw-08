import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInputForm), 500);
form.addEventListener('submit', onSubmitForm);

let storageForm = { email: '', message: '' };
let loadingStorageForm = {};

initForm();

function initForm() {
  let savedStorageForm = localStorage.getItem(
    'feedback-form-state',
    storageForm
  );

  if (savedStorageForm !== null) {
    loadingStorageForm = JSON.parse(savedStorageForm);
  } else {
    loadingStorageForm = { email: '', message: '' };
  }

  form.elements.email.value = loadingStorageForm.email;
  form.elements.message.value = loadingStorageForm.message;
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(
    ` email : ${form.elements.email.value}  message : ${form.elements.message.value}`
  );
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function populateForm() {
  localStorage.setItem('feedback-form-state', JSON.stringify(storageForm));
}

function onInputForm(event) {
  storageForm.email = event.target.form.elements.email.value;
  storageForm.message = event.target.form.elements.message.value;
  populateForm();
}