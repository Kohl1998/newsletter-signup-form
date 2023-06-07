/* 
- Add their email and submit the form
- See a success message with their email after successfully submitting the form

See form validation messages if:
1) The field is left empty

2)The email address is not formatted correctly

3) View the optimal layout for the interface depending on their device's screen size

4)See hover and focus states for all interactive elements on the page 
*/


function validateEmail(userInput) {
    
    
    // Tracks user input
    const emailValue = document.getElementById('email').value
    
    // ASCII Characters:
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if (userInput.value.match(validRegex)) {
        // alert(`Thanks for subscribing to our newsletter ${emailValue}`) 
    const triggerPopUp = document.getElementById('confirmationEmail')
    triggerPopUp.removeAttribute('id')
    triggerPopUp.classList.add('openPopUp')
    
    const subscriptionMessage = document.getElementById('subscriptionMessage')
    const subscriptionText = document.createElement('p')
    subscriptionText.textContent = `A confirmation email has been sent to ${emailValue}
    Please open it and click the button inside to confirm your subscription.`
    
    // Takes user input and places it in subscription message
    subscriptionMessage.append(subscriptionText)

    // Removes error message if email is formatted correctly
    displayMessage.textContent = ''
    } else {
        document.getElementById('email').style.cssText = "border: 1px solid red; color: red; font-size: 20px; background-color: #ffb6c1;"
        // Dynamic error message for incorrect format
        const displayMessage = document.getElementById('feedbackMessage')
        const feedback = document.createElement('p')
        feedback.textContent = "Please enter a valid email address!"
        feedback.style.color = "red"
        displayMessage.append(feedback)
}
}

// Function to close pop up message
function closeConfirmation () {
    const closePopUp = document.getElementById('popUpContainer')
    closePopUp.classList.add('closePopUp')
} 
