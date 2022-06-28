//팔로우 클릭
const follow = document.getElementsByClassName('follow');
const modal = document.getElementById('modal');

function onFollow() {
    modal.style.display = 'block';
}
function offFollow() {
    modal.style.display = 'none';
}

//추가(plus) 카테고리 
const addCategory = document.getElementById('add-category');
function onBtn() {
  addCategory.style.display = 'block';
}

//취소 버튼
function delClick() {
  addCategory.style.display = "none";
  e.preventDefault();
}

//추가 버튼 클릭 시
const addForm = document.querySelector("#addForm");
const commentsContainer = document.querySelector("#comments");
const addInput = document.querySelector('#addForm > input');

// addForm.addEventListener("submit", (e) => {
  
//   const commentInput = addForm.elements.comment;
//   addComment(commentInput.value);
//   commentInput.value = "";
  
//   e.preventDefault();

// });
function addClick() {

  if (addInput.value == '') {
    alert('이름을 입력하세요');
  } else {
    const commentInput = addForm.elements.comment;
    addComment(commentInput.value);
    commentInput.value = "";
  
    // e.preventDefault();
    return false;
  }

  // const commentInput = addForm.elements.comment;
  // addComment(commentInput.value);
  // commentInput.value = "";
  
  // e.preventDefault();
}

const addComment = (comment) => {
  const newComment = document.createElement("li");
  //const imgTag = document.createElement("img");
  //imgTag.append(comment);
  //newComment.append(imgTag);
  newComment.append(`${comment}`);
  newComment.style.marginTop = '5px';
  commentsContainer.append(newComment);

  addCategory.style.display = "none";
};