const formEmailInput = document.querySelector('[data-form-email-input]');
const formSubmitButton = document.querySelector('[data-form-submit-btn]');

const validateEmailInput = () => {
  if (
    !formEmailInput.value.match(
      /^([a-z\d.!#$%&'*+-/=?^_`{|}~-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g
    )
  ) {
    return false;
  }
  return true;
};

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
