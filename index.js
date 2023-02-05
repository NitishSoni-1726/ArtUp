const toggleButton = document.getElementById("toggle-button");
const toggleList = document.getElementById("toggle-menu");
toggleButton.addEventListener("click", navClick);
function navClick() {
  toggleList.classList.toggle("displayblock");
}

const raiseCapital = document.getElementById("raisecapital");
raiseCapital.addEventListener("click", raiseCapitalClick);

function raiseCapitalClick() {
  location.href = "https://www.google.com";
}
const home = document.getElementById("home");
home.addEventListener("click", homeclick);
function homeclick() {
  location.href = "index.html";
}
