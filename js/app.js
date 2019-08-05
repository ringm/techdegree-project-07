//---------------------------------------------
//VARIABLES
//---------------------------------------------
const alertMsg = document.querySelector('.alert-msg');
const newNotif = document.querySelector('.new-notification');
const inputUser = document.querySelector('.input--search-user');
const msgUser = document.querySelector('.textarea--message-user');
const sendBtn = document.querySelector('.button--send');
const missingFieldUser = document.querySelector('.warning-msg-user');
const missingMsg = document.querySelector('.warning-msg-msg');

//---------------------------------------------
//EVENT LISTENERS
//---------------------------------------------

alertMsg.addEventListener('click', e => {
    alertMsg.style.display = 'none';
    newNotif.style.display = 'none';
    }
)

sendBtn.addEventListener('click', e => {
    if(inputUser.value == ''){
        missingFieldUser.classList.remove('hidden');
        missingFieldUser.classList.add('show');
        } 
    if(msgUser.value == ''){
        missingMsg.classList.remove('hidden');
        missingMsg.classList.add('show');
        }
    }
)