var signupmodal = document.getElementById("signupModel");

var signupbtn = document.getElementById("signupBtn");

var signupClose = document.getElementById("signupClose");

var signinmodal = document.getElementById("signinModal");

var signinbtn = document.getElementById("signinBtn");

var signinClose = document.getElementById("signinClose");

signupbtn.onclick = function () {
  signupmodal.style.display = "block";
};

signinbtn.onclick = function () {
  signinmodal.style.display = "block";
};

signupClose.onclick = function () {
  signupmodal.style.display = "none";
};

signinClose.onclick = function () {
  signinmodal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == signupmodal) {
    this.signupmodal.style.display = "none";
  }
  if (event.target == signinmodal) {
    this.signinmodal.style.display = "none";
  }
};

document.getElementById("signupBtnAgain").onclick = function () {
  signinmodal.style.display = "none";
  signupmodal.style.display = "block";
};
