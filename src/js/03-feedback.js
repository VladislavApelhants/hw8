var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form')
const inputName = document.querySelector("input[name='email']")
const textMessage = document.querySelector('textarea[name=message]')
const onFormInputData = {}

const FORM_DATA_KEY = 'feedback-form-state'
form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onFormInput, 500))

function onFormSubmit(e) {
    e.preventDefault()
    const onFormSubmitDataShow = {}
    const data = new FormData(e.currentTarget)
    data.forEach((value, name) => {
        onFormSubmitDataShow[name.trim()] = value.trim()
    })
    if (onFormSubmitDataShow.email === '' || onFormSubmitDataShow.message === '' ) {
            alert('Не все поля заполнены')
            return
        }
    console.log(onFormSubmitDataShow);
    e.currentTarget.reset()
    localStorage.removeItem(FORM_DATA_KEY)
};

showSavedData()

function onFormInput(e) {
    const element = e.target
    onFormInputData[element.name] = element.value
    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(onFormInputData))
}

function showSavedData() {
    const data = JSON.parse(localStorage.getItem(FORM_DATA_KEY))
    if(data) {
    inputName.value = data.email;
    textMessage.value = data.message 
    }
}

