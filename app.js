const username = document.getElementById("username-input");
const usernameRequirements = document.querySelector(".username-requirements");

// Validators
function validateUsername() {
  // TODO Check for length checkForMinLength(username, 3)
  // TODO Check for contains only characters and letters
  return (
    checkForLettersAndNumbers(username) &&
    checkForMinAndMaxLength(username, 3, 10)
  );
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
