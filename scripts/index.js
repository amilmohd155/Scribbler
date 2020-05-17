var signupmodal = document.getElementById("signupModel");

var signupbtn = document.getElementById("signupBtn");

var signupClose = document.getElementById("signupClose");

var signinmodal = document.getElementById("signinModal");

var signinbtn = document.getElementById("signinBtn");

var signinClose = document.getElementById("signinClose");

var createPostModal = document.getElementById("createPostModal");
var createPostBtn = document.getElementById("createPostBtn");
var createClose = document.getElementById("createClose");

// onclick functions to show the create post modal
createPostBtn.onclick = function () {
  createPostModal.style.display = "block";
};

// onclick functions to close the create post modal
createClose.onclick = function () {
  createPostModal.style.display = "none";
};

// onclick functions to show the sign up modal
signupbtn.onclick = function () {
  signupmodal.style.display = "block";
};

// onclick functions to show the sign in modal
signinbtn.onclick = function () {
  signinmodal.style.display = "block";
};

// onclick functions to hide the sign up modal
signupClose.onclick = function () {
  signupmodal.style.display = "none";
};

// onclick functions to hide the sign in modal
signinClose.onclick = function () {
  signinmodal.style.display = "none";
};

// function to hide the active modal when clicked outside it
window.onclick = function (event) {
  if (event.target == signupmodal) {
    this.signupmodal.style.display = "none";
  }
  if (event.target == signinmodal) {
    this.signinmodal.style.display = "none";
  }
  if (event.target == this.createPostModal) {
    this.createPostModal.style.display = "none";
  }
};

// function to jump to sign up modal on clicking the "dont have an account? signup" link
document.getElementById("signupBtnAgain").onclick = function () {
  signinmodal.style.display = "none";
  signupmodal.style.display = "block";
};
