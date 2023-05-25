import { createAboutFlexItems } from './about/createAboutFlexItems.js'
import { onFormSubmit } from './form/onFormSubmit.js'

createAboutFlexItems()

function toLocalStorage() {
    const form = document.getElementById('form').value;
    const nameElement = document.getElementById("name").value;
    const telephoneElement = document.getElementById("telephone").value;
    const emailElement = document.getElementById("email").value;
    const humanCountElement = document.getElementById("human-count").value;
    const preferredEmailElement = document.getElementById("preferred-email").checked;
    const preferredPhoneElement = document.getElementById("preferred-phone").checked;
    const preferredPostElement = document.getElementById("preferred-post").checked;
    const marketingConsentElement = document.getElementById("marketing-consent").checked;

    const formDetails = {
        "name": nameElement,
        "telephone": telephoneElement,
        "email": emailElement,
        "humans": humanCountElement,
        "emailRadio": preferredEmailElement,
        "phoneRadio": preferredPhoneElement,
        "postRadio": preferredPostElement,
        "marketingConsent": marketingConsentElement
    };

    localStorage.setItem("formDetails", JSON.stringify(formDetails));
}

const form = document.getElementById('form')
form.addEventListener('submit', onFormSubmit)
form.addEventListener('submit', toLocalStorage)
