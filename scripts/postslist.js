var trash = document.getElementsByClassName("delete-post");
var deleteModal = document.getElementById("deleteModal");
var trashIcon = document.getElementsByClassName("fa-trash");
var postCard = document.getElementsByClassName("post-card");
var element = 0;

for (let i = 0; i < trash.length; ++i) {
  trash[i].onclick = function (event) {
    deleteModal.style.display = "flex";
    getElementIndex(event);
  };
}

function getElementIndex(event) {
  for (let i = 0; i < trash.length; ++i) {
    if (trashIcon[i] == event.target) {
      element = i;
    }
  }
}

window.onclick = function (event) {
  if (event.target == this.deleteModal) {
    this.deleteModal.style.display = "none";
  }
};

var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

noBtn.onclick = function () {
  deleteModal.style.display = "none";
};

yesBtn.onclick = function () {
  postCard[element].remove();
  deleteModal.style.display = "none";
};