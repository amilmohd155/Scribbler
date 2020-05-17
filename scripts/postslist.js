var trash = document.getElementsByClassName("delete-post");
var deleteModal = document.getElementById("deleteModal");
var trashIcon = document.getElementsByClassName("fa-trash");
var postCard = document.getElementsByClassName("post-card");
var element = 0;

//iterating to get all the possible interactions with the various cards
for (let i = 0; i < trash.length; ++i) {
  trash[i].onclick = function (event) {
    deleteModal.style.display = "flex";
    getElementIndex(event);
  };
}

// function to get the card number in order delete the respective card
function getElementIndex(event) {
  for (let i = 0; i < trash.length; ++i) {
    if (trashIcon[i] == event.target) {
      element = i;
    }
  }
}

// to close the delete modal on clicking outside the modal
window.onclick = function (event) {
  if (event.target == this.deleteModal) {
    this.deleteModal.style.display = "none";
  }
};

var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

// to handle the no button in the modal
noBtn.onclick = function () {
  deleteModal.style.display = "none";
};

// to handle the yes button in the modal
yesBtn.onclick = function () {
  postCard[element].remove(); //respective card is removed
  deleteModal.style.display = "none"; //modal is hiden after the function as been completed
};
