var editBtn = document.getElementById("editBtn");
var titleDiv = document.getElementById("title-div");
var titleOld, titleNew;

var editbtnFlag = 0;

editBtn.onclick = function () {
  if (editbtnFlag === 0) {
    titleOld = titleDiv.children[0].innerHTML;
  }
};
