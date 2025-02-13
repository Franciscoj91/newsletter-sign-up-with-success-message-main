const button = document.querySelector('button');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');
const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const main = document.querySelector('main');
const successPage = document.querySelector('#success-page');
const successButton = document.querySelector('#success-button');
const userEmail = document.querySelector('#user-email');

button.addEventListener('click', (event) => {
  event.preventDefault();

  if (!emailFormat.test(emailInput.value) || !emailInput.value) {
    emailInput.classList.add('error');
    errorMessage.style.display = 'inline-block';
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
    main.style.display = 'none';
    userEmail.textContent = emailInput.value;
    successPage.style.display = 'flex';
  }
  
});

successButton.addEventListener('click', () => {
  main.style.display = 'flex';
  successPage.style.display = 'none';
  emailInput.value = '';
});