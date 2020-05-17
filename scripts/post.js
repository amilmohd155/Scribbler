var editBtn = document.getElementById("editBtn");
var titleDiv = document.getElementById("title-div");
var contentDiv = document.getElementsByClassName("content")[0];
var titleOld, titleNew, contentNew, contentOld;

// Edit and save button onclick function
editBtn.onclick = function () {
  //Edit button fuctionaity part
  if (editBtn.children[0].innerHTML == "Edit") {
    titleOld = titleDiv.children[0].innerText.trim();
    contentOld = contentDiv.children[0].innerText.trim();

    editBtn.innerHTML = "<p>Save</p><span><i class='fas fa-save'></i>";

    titleDiv.innerHTML =
      "<input type='text' id='edit-title' value='" +
      titleOld +
      "' placeholder='Enter the title here'/>";

    contentDiv.innerHTML =
      "<textarea id='content-area'  cols='30' rows='20'>" +
      contentOld +
      "</textarea>";
  } //Save button functionality part
  else if (editBtn.children[0].innerHTML == "Save") {
    var editTitle = document.getElementById("edit-title");
    var contentArea = document.getElementById("content-area");

    // checking whether changes have been made to title
    if (editTitle.value.trim() != titleOld) {
      titleNew = "UPDATED:" + editTitle.value.trim();
      titleDiv.innerHTML = "<h3>" + titleNew + "</h3>";
    } else {
      titleNew = editTitle.value;
      titleDiv.innerHTML = "<h3>" + titleNew + "</h3>";
    }
// checking whether changes have been made to content
    if (contentArea.value.trim() != contentOld) {
      contentNew = "UPDATED:<br>" + contentArea.value.trim();
      contentDiv.innerHTML = "<p>" + contentNew + "</p>";
    } else {
      contentNew = contentArea.value.trim();
      contentDiv.innerHTML = "<p>" + contentNew + "</p>";
    }

    editBtn.innerHTML = "<p>Edit</p><span><i class='far fa-edit'></i></span>";
  }
};

var likedBy = 0;

var likeBtn = document.getElementById("like-btn");
var numLikes = document.getElementsByClassName("num-likes")[0];

//like button functionality
likeBtn.onclick = function () {
  likedBy++; //likes been incremented
  likeBtn.children[1].innerHTML = "Liked"; 
  numLikes.innerHTML = likedBy + " people like this!";
};

var commentBtn = document.getElementById("comment-btn");
var commentText = document.getElementById("comment-text");
var commentList = document.getElementsByClassName("comment-list")[0];

//comments  functionality
commentBtn.onclick = function () {
  var comment = commentText.value.trim();

  // check if comment is empty or not
  if(comment != '') {
    var paraNode = document.createElement("p");
    var textNode = document.createTextNode(comment);
    paraNode.appendChild(textNode);  // new node created completely contained the entered comment
  
    commentList.insertBefore(paraNode, commentList.firstChild); // new comment been inserted
    commentText.value = "";
  }

};
