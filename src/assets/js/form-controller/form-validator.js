const formEmailInput = document.querySelector('[data-form-email-input]');
const formSubmitButton = document.querySelector('[data-form-submit-btn]');

const addErrorMessageOnDOM = (error) => {
  const contactForm = document.querySelector('[data-contact-form]');
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('form-input-error-message');
  errorMessage.innerHTML = error;
  contactForm.appendChild(errorMessage);
};

const addErrorBorderToElement = (element) => {
  element.style.border = '1px solid red';
  element.style.boxShadow = '0px 0px 3px #ff0000';
};

formSubmitButton.addEventListener('click', (event) => {
  if (!validateEmailInput()) {
    event.preventDefault();
    addErrorMessageOnDOM('Email must be a valid address, e.g me@mydomain.com.');
    addErrorBorderToElement(formEmailInput);
  }
});
