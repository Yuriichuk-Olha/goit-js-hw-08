import throttle from "lodash.throttle";

const STOREGE_KEY = 'feedback-form-state';


//const input = document.querySelector("input");
//const textarea = document.querySelector("textarea");
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', throttle(function(event){
    event.preventDefault();

    const data = {
                input: input.value,
                textarea: textarea.value,
            }
            localStorage.setItem(STOREGE_KEY, JSON.stringify(data));

            const saveMessage = localStorage.getItem(STOREGE_KEY);
        console.log(saveMessage);
    if(saveMessage){
        const parseMessage = JSON.parse(saveMessage);
        console.log(data);
    }
    event.currentTarget.reset();
    localStorage.removeItem(STOREGE_KEY);
}, 500)
)











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