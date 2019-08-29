const username = document.getElementById("username-input");
const password = document.getElementById("password-input");
const repeatPassword = document.getElementById("repeat-password-input");
const usernameRequirements = document.querySelector(".username-requirements");
const passwordRequirements = document.querySelector(".password-requirements");
const repeatPasswordRequirements = document.querySelector(
  ".repeat-password-requirements"
);

// Validators
function validateUsername() {
  return (
    checkForLettersAndNumbers(username) &&
    checkForMinAndMaxLength(username, 3, 20)
  );
}

function validatePassword() {
  return (
    checkForMinAndMaxLength(password, 8, 100) &&
    checkForCorrectPassword(password)
  );
}

function validateRepeatedPassword() {
  if (password.value === repeatPassword.value) return true;
}

// Utility
function checkForMinAndMaxLength(input, minLength, maxLength) {
  if (input.value.length < minLength || input.value.length > maxLength)
    return false;
  return true;
}

function checkForLettersAndNumbers(input) {
  const regEx = /[^a-zA-Z0-9]/g;
  if (input.value.match(regEx)) return false;
  return true;
}

function checkForCorrectPassword(input) {
  const regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  if (!input.value.match(regEx)) return false;
  return true;
}

// Event Listeners
username.addEventListener("keyup", () => {
  validateUsername()
    ? toggleValidRequirements(usernameRequirements)
    : toggleInvalidRequirements(usernameRequirements);
});

password.addEventListener("keyup", () => {
  validatePassword()
    ? toggleValidRequirements(passwordRequirements)
    : toggleInvalidRequirements(passwordRequirements);
});

repeatPassword.addEventListener("keyup", () => {
  validateRepeatedPassword()
    ? toggleValidRequirements(repeatPasswordRequirements)
    : toggleInvalidRequirements(repeatPasswordRequirements);
});

// DOM Manipulation
function toggleValidRequirements(target) {
  target.firstElementChild.classList.add("valid");
  target.firstElementChild.classList.remove("invalid");
}

function toggleInvalidRequirements(target) {
  target.firstElementChild.classList.add("invalid");
  target.firstElementChild.classList.remove("valid");
}
