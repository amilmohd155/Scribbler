var trash = document.getElementsByClassName("delete-post");
var deleteModal = document.getElementById("deleteModal");

for (var i = 0; i < trash.length; ++i) {
  trash[i].onclick = function () {
    deleteModal.style.display = "flex";
  };
}

window.onclick = function (event) {
  if (event.target == this.deleteModal) {
    this.deleteModal.style.display = "none";
  }
};

var yesBtn = document.getElementById
