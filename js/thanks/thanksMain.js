const user = localStorage.getItem('formDetails')
const userObject = JSON.parse(user)
const thanksTextElement = document.querySelector('#thanks__name')
thanksTextElement.textContent = `Hi ${userObject.name}`
