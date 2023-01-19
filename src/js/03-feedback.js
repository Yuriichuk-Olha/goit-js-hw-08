import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STOREGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STOREGE_KEY)) || {};
onMessageText();

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  event.target.reset();
  localStorage.removeItem(STOREGE_KEY);
}

form.addEventListener(
  'input',
  throttle(function (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
  }, 500)
);

function onMessageText() {
  const saveMessage = localStorage.getItem(STOREGE_KEY);
  if (saveMessage) {
    const parseMessage = JSON.parse(saveMessage);
    console.log(parseMessage);
    const {email, message} = form.elements;
    email.value = parseMessage.email || "";
    message.value = parseMessage.message || "";

    return;
  }
}