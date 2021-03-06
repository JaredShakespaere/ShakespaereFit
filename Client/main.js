const { getProduct } = require("../Server/ctrl");

const baseURL = `http://localhost:4400/api/user`
let form = document.querySelector('form#assessment');

const errCallback = err => console.log(err)
const dataCallback = data => console.log(data)


const createUser = body => axios.post(baseURL, body).then(dataCallback).catch(errCallback)


form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your trainer will contact you!');
}

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let phoneNumber = document.querySelector('#phoneNumber')
    let email = document.querySelector('#email')
    let goals = document.querySelector('#goals')
    let importantToReachGoal = document.querySelector('#quantity')
    let fullyPresent = document.querySelector('#radioYN')
    let additionalInfo = document.querySelector('#info')

    let bodyObj = {
        name: name.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        goals: goals.value,
        importantToReachGoal: importantToReachGoal.value,
        fullyPresent: fullyPresent.value,
        additionalInfo: additionalInfo.value
    }

    createUser(bodyObj)

    name.value = ''
    phoneNumber.value = ''
    email.value = ''
    goals.value = ''
    importantToReachGoal.value = ''
    fullyPresent.checked = false
    additionalInfo.value = ''

    console.log(createUser(bodyObj))
}

form.addEventListener('submit', submitHandler)



