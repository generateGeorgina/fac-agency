const user = localStorage.getItem("formDetails");
// console.log(user);
const userObject = JSON.parse(user);
console.log(userObject);

const thanksTextElement = document.querySelector('#thanks__name');
console.log(thanksTextElement);
thanksTextElement.textContent = `Hi ${userObject.name}`;
