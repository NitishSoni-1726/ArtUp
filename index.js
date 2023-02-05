const toggleButton = document.getElementById("toggle-button");
const toggleList = document.getElementById("toggle-menu");
const home = document.getElementById("home");
const raiseCapital = document.getElementById("raisecapital");
const browse = document.getElementById("browse");
const about = document.getElementById("about");
const signIn = document.getElementById("signin");
const signUp = document.getElementById("signup");
const search = document.getElementById("search");
const toggleRaiseCapital = document.getElementById("toggleraisecapital");
const toggleBrowse = document.getElementById("togglebrowse");
const toggleAbout = document.getElementById("toggleabout");
const toggleSignIn = document.getElementById("togglesignin");
const toggleSignUp = document.getElementById("togglesignup");
const toggleSearch = document.getElementById("togglesearch");
const buttonsignUp = document.getElementById("buttonsignup");

toggleButton.addEventListener("click", navClick);
home.addEventListener("click", homeclick);
raiseCapital.addEventListener("click", raiseCapitalClick);
browse.addEventListener("click", browseClick);
about.addEventListener("click", aboutClick);
signIn.addEventListener("click", signInClick);
signUp.addEventListener("click", signUpClick);
search.addEventListener("click", searchClick);
home.addEventListener("click", homeclick);
raiseCapital.addEventListener("click", raiseCapitalClick);
browse.addEventListener("click", browseClick);
about.addEventListener("click", aboutClick);
signIn.addEventListener("click", signInClick);
signUp.addEventListener("click", signUpClick);
search.addEventListener("click", searchClick);
toggleRaiseCapital.addEventListener("click", raiseCapitalClick);
toggleBrowse.addEventListener("click", browseClick);
toggleAbout.addEventListener("click", aboutClick);
toggleSignIn.addEventListener("click", signInClick);
toggleSignUp.addEventListener("click", signUpClick);
toggleSearch.addEventListener("click", searchClick);
buttonsignUp.addEventListener("click", signUpClick);

function navClick() {
  toggleList.classList.toggle("displayblock");
}
function homeclick() {
  location.href = "index.html";
}
function raiseCapitalClick() {
  location.href = "raiseCapital.html";
}
function browseClick() {
  location.href = "browse.html";
}
function aboutClick() {
  location.href = "about.html";
}
function signInClick() {
  location.href = "signIn.html";
}
function signUpClick() {
  location.href = "signUp.html";
}
function searchClick() {
  location.href = "search.html";
}
