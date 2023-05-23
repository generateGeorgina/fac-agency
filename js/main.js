import { createAboutFlexItems } from './about/createAboutFlexItems.js'
import { onFormSubmit } from './form/onFormSubmit.js'

createAboutFlexItems()

const form = document.getElementById('form')
form.addEventListener('submit', onFormSubmit)
