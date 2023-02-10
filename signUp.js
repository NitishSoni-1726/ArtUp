const passwordInput = document.querySelector("#password");
const showPassword = document.querySelector("#showpassword");
showPassword.addEventListener("click", passwordToggle);

function passwordToggle() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
