import { createAboutFlexItems } from './about/createAboutFlexItems.js'
import { onFormSubmit } from './form/onFormSubmit.js'
import { toLocalStorage } from './form/toLocalStorage.js'

createAboutFlexItems()

const form = document.getElementById('form')
form.addEventListener('submit', onFormSubmit)
form.addEventListener('submit', toLocalStorage)
