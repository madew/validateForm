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
    checkForMinAndMaxLength(username, 3, 10)
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
  if (validateUsername()) {
    usernameRequirements.firstElementChild.classList.add("valid");
    usernameRequirements.firstElementChild.classList.remove("invalid");
  } else {
    usernameRequirements.firstElementChild.classList.add("invalid");
    usernameRequirements.firstElementChild.classList.remove("valid");
  }
});

password.addEventListener("keyup", () => {
  if (validatePassword()) {
    passwordRequirements.firstElementChild.classList.add("valid");
    passwordRequirements.firstElementChild.classList.remove("invalid");
  } else {
    passwordRequirements.firstElementChild.classList.add("invalid");
    passwordRequirements.firstElementChild.classList.remove("valid");
  }
});

repeatPassword.addEventListener("keyup", () => {
  if (validateRepeatedPassword()) {
    repeatPasswordRequirements.firstElementChild.classList.add("valid");
    repeatPasswordRequirements.firstElementChild.classList.remove("invalid");
  } else {
    repeatPasswordRequirements.firstElementChild.classList.add("invalid");
    repeatPasswordRequirements.firstElementChild.classList.remove("valid");
  }
});
