export const onFormSubmit = async (e) => {
  e.preventDefault()

  const formElements = form.querySelectorAll('input, textarea, select')
  const formElementsArray = Array.from(formElements)
  let formDetails = {}

  for (const formElement of formElementsArray) {
    if (formElement.type === 'radio' && formElement.checked === true) {
      formDetails.contactPref = formElement.value
    }
    if (formElement.type !== 'radio') {
      formDetails[formElement.name] = formElement.value
    }
  }

  await postData(formDetails)
}

const postData = async (clientDetails) => {
  const url = 'https://fac-agency.herokuapp.com/send-email'
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientDetails),
    })

    const responseData = await response.json()
    console.log(responseData)
  } catch (err) {
    console.error(err)
  }
}
