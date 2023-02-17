window.onload = Script;
function Script(event) {
  event.preventDefault();
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
  const footerGetStarted = document.getElementById("footer-get-started");
  const footerStartFundraise = document.getElementById(
    "footer-start-a-fundraise"
  );
  const footerInvestorSignup = document.getElementById(
    "footer-investor-signup"
  );
  const footerAccountLogin = document.getElementById("footer-acount-login");
  const footerBrowse = document.getElementById("footer-browse");
  const footerTrending = document.getElementById("footer-trending");
  const footerRecentlyFunded = document.getElementById(
    "footer-recently-funded"
  );
  const footerNew = document.getElementById("footer-new");
  const footerCommunities = document.getElementById("footer-communities");
  const footerFaq = document.getElementById("footer-faq");
  const footerGuidelines = document.getElementById("footer-guidelines");
  const footerContact = document.getElementById("footer-contact");
  const footerPrivacyPolicy = document.getElementById("footer-privacy-policy");
  const footerTerms = document.getElementById("footer-terms-of-service");
  const footerTwitter = document.getElementById("footer-twitter");
  const footerInstagram = document.getElementById("footer-instagram");
  const footerLinkedin = document.getElementById("footer-linkedin");

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
  footerGetStarted.addEventListener("click", signUpClick);
  footerStartFundraise.addEventListener("click", signUpClick);
  footerInvestorSignup.addEventListener("click", investorsignUpClick);
  footerAccountLogin.addEventListener("click", signInClick);
  footerBrowse.addEventListener("click", browseClick);
  footerTrending.addEventListener("click", trendingClick);
  footerRecentlyFunded.addEventListener("click", recentlyfundedClick);
  footerNew.addEventListener("click", newClick);
  footerCommunities.addEventListener("click", communitiesClick);
  footerFaq.addEventListener("click", faqClick);
  footerGuidelines.addEventListener("click", guidelinesClick);
  footerContact.addEventListener("click", contactClick);
  footerPrivacyPolicy.addEventListener("click", privacypolicyClick);
  footerTerms.addEventListener("click", termsClick);
  footerTwitter.addEventListener("click", twitterClick);
  footerInstagram.addEventListener("click", instagramClick);
  footerLinkedin.addEventListener("click", linkedinClick);
  buttonsignUp.addEventListener("click", signUpClick);

  function navClick() {
    console.log("Navigation Toggle");
    toggleList.classList.toggle("displayblock");
  }
  function homeclick() {
    console.log("Home");
    location.href = "index.html";
  }
  function raiseCapitalClick() {
    console.log("Raise Capital");
    location.href = "raiseCapital.html";
  }
  function browseClick() {
    console.log("Browse StartUps");
    location.href = "browse.html";
  }
  function aboutClick() {
    console.log("About");
    location.href = "about.html";
  }
  function signInClick() {
    console.log("Sign In");
    location.href = "signIn.html";
  }
  function signUpClick() {
    console.log("Sign Up");
    location.href = "signUp.html";
  }
  function searchClick() {
    const container = document.querySelector("#search-content");
    container.classList.toggle("displayblock");
  }
  function investorsignUpClick() {
    console.log("Investors SignUp");
    location.href = "";
  }
  function trendingClick() {
    console.log("Trending Browse");
    location.href = "";
  }
  function recentlyfundedClick() {
    console.log("Recently Funded Browse");
    location.href = "";
  }
  function newClick() {
    console.log("New Browse");
    location.href = "";
  }
  function communitiesClick() {
    console.log("Communities Browse");
    location.href = "";
  }
  function faqClick() {
    console.log("FAQ");
    location.href = "";
  }
  function guidelinesClick() {
    console.log("GuideLines");
    location.href = "";
  }
  function contactClick() {
    console.log("Contact");
    location.href = "";
  }
  function privacypolicyClick() {
    console.log("Privacy Policy");
    location.href = "";
  }
  function termsClick() {
    console.log("Terms of Use");
    location.href = "";
  }
  function twitterClick() {
    console.log("Twitter Handle");
    location.href = "";
  }
  function instagramClick() {
    console.log("Instagram Handle");
    location.href = "";
  }
  function linkedinClick() {
    console.log("LinkedIn Handle");
    location.href = "";
  }
}
