const passwordInput = document.querySelector("#loginpassword");
const showPassword = document.querySelector("#loginshowpassword");
showPassword.addEventListener("click", passwordToggle);

function passwordToggle() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

const registerpasswordInput = document.querySelector("#registerpassword");
const registershowPassword = document.querySelector("#registershowpassword");
registershowPassword.addEventListener("click", registerPasswordToggle);

function registerPasswordToggle() {
  if (registerpasswordInput.type === "password") {
    registerpasswordInput.type = "text";
  } else {
    registerpasswordInput.type = "password";
  }
}
