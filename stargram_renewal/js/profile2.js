//팔로우 클릭
const follow = document.getElementsByClassName('follow');
const modal = document.getElementById('modal');

function onFollow(e) {
    modal.style.display = 'block';
}
function offFollow() {
    modal.style.display = 'none';
}

//추가 카테고리 
function onBtn() {
    //addCategory.style.display = 'block';
    //addCategory.classList.add('animated', 'fadeInUp');

    // addCategory.animate([
    //     { opacity: "0", transform: "translateX(-50%), translateY(20px)" },
    //     { opacity: "1", transform: "translateX(0), translateY(0)" }
    // ], {
    //     duration: 200
    // }); 

    // addCategory.style.display = 'block';

    // if(btnPlus.clicked == true) {
    //     addCategory.classList.add('animated', 'fadeInUp');
    // } else {
    //     addCategory.classList.remove('animated', 'fadeInUp');
    // }

    let addCategory = document.getElementById('add-category');

    if(addCategory.style.display = 'block') {
        addCategory.classList.add('animated', 'fadeInUp');
    } else {
        addCategory.classList.remove('animated', 'fadeInUp');
    }  
}

//추가 버튼 클릭 시
const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");

instaForm.addEventListener("submit", (e) => {
  e.preventDefault();
//   const usernameInput = instaForm.elements.username;
  const commentInput = instaForm.elements.comment;
  addComment(commentInput.value);
  commentInput.value = "";

  

  let emptyCheck = button.value.replace(/(\s*)/g, ''); //공백 삭제
  let isEmpty = true;
  emptyCheck == '' ? (isEmpty = true) : (isEmpty = false); 
  //공백이 삭제된 값을 통해 공백만 입력한 경우에도 빈 문자열로 간주한다.
  
  if (isEmpty === true) {
    button.disabled = true;
    submitBtnDeactivate();
  } else {
    button.disabled = false;
    submitBtnActivate();
  }





});

const addComment = (comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("img");
  bTag.append(comment);
  newComment.append(bTag);
  newComment.append(`${comment}`);
  commentsContainer.append(newComment);
};


const addCate = document.getElementById('add-category');
function delClick() {
    addCate.style.display = "none";
}