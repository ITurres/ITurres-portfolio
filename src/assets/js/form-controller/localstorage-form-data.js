const formObj = {
  contactFullName: null,
  contactEmail: null,
  contactMessage: null
};

const formInputs = document.querySelectorAll('[data-form-input]');

const storeDataInLocalStorage = (dataKey, dataValue) => {
  Object.keys(formObj).forEach((key) => {
    if (dataKey === key) {
      formObj[key] = dataValue;
    }
  });
  localStorage.setItem('formData', JSON.stringify(formObj));
};

const loadFormDataFromLocalStorage = () => {
  const storedFormData = localStorage.getItem('formData');
  if (storedFormData) {
    const parsedFormData = JSON.parse(storedFormData);
    Object.assign(formObj, parsedFormData);
    formInputs.forEach((input) => {
      if (input.name in parsedFormData) {
        input.value = parsedFormData[input.name];
      }
    });
  }
};

formInputs.forEach((input) => {
  input.addEventListener('change', (event) => {
    storeDataInLocalStorage(event.target.name, event.target.value);
  });
});

if (window.localStorage.length > 0) {
  loadFormDataFromLocalStorage();
}
