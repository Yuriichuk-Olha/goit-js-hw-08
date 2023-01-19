import throttle from "lodash.throttle";

const button = document.querySelector("button")
//const input = document.querySelector("input");
//const textarea = document.querySelector("textarea");
const form = document.querySelector('.feedback-form');

const STOREGE_KEY = 'feedback-form-state';

onMessageText();

button.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
        console.log(event);
            event.preventDefault();
            event.currentTarget.reset()
            localStorage.removeItem(STOREGE_KEY)
    }

form.addEventListener('input', throttle(function(){

    const data = {
    input:form.email.value,
    textarea: form.message.value,
}
    localStorage.setItem(STOREGE_KEY, JSON.stringify(data));
}, 500)
)

function onMessageText() {
    const saveMessage = localStorage.getItem(STOREGE_KEY)
    if(saveMessage){
        const parseMessage = JSON.parse(saveMessage)

        form.email.value = parseMessage.input.value;
        console.log(form.email.value);
        form.message.value = parseMessage.textarea.value;
        console.log(parseMessage);
        return
    }
}










// form.addEventListener('submit', onFormSubmit)
// textarea.addEventListener('input', throttle(onTextareaInput, 500))
// input.addEventListener('input', throttle(onTextareaInput, 500))

// onMessageText()


// function onFormSubmit(event) {
//     console.log(event);
//         event.preventDefault();

//         event.currentTarget.reset()
//         localStorage.removeItem(STOREGE_KEY)
// }

// function onTextareaInput(e)  {

//     const data = {
//         input: input.value,
//         textarea: textarea.value,
//     }

//     localStorage.setItem(STOREGE_KEY, JSON.stringify(data));

// }

// function onMessageText() {
//     const saveMessage = localStorage.getItem(STOREGE_KEY)
//   //  console.log(saveMessage);
//     if(saveMessage){
//         JSON.parse(saveMessage);
//         console.log(saveMessage);
//     }
// }