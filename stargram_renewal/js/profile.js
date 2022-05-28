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



function addBtn(newTxtList, value) {
    const txtLists = document.getElementById('new-add');
    const newTxtList = document.createElement('li');
    const defaltTxt = `<span class="name">eenooyos</span><span> ${value}</span><span class="delete"> x </span>`;

    newTxtList.innerHTML = defaltTxt; // li 태그에 댓글defalt값을 설정 해 준다.
    txtLists.appendChild(newTxtList);// ul에 li 를 자식요소로 붙인다.
    txtInput.value = ""; // 댓글 입력 후 input의 값을 비어있게 만든다.

    deleteTxt(newTxtList);// deleteComment 함수를 실행시킨다.

}

function deleteTxt(newTxtList) {
    const deleteBtn = newTxtList.querySelector('.delete');
    deleteBtn.addEventListener('click', () => newTxtList.remove());
}

function checkInput() {
    const newTxt = txtInput.value;
    if (newTxt.length > 0) { // input의 값이 0 보다 클때
        addBtn(newTxt); // addComment함수를 실행한다.
    } else if(window.event.code === 'Enter'){ // 엔터를 입력하면
        if(newTxt.length > 0){ // input의 값이 0보다 클때
            addTxt(newTxt);// addComment함수를 실행한다.
        }else{ // 0 보다 작을 때
            alert("댓글을 입력하세요!");// alert 창을 띄워준다.
        }
    }else { // input 의 값이 0보다 작을 때
        alert("댓글을 입력하세요!");// alert 창을 띄워준다.
    }
    event.preventDefault(); // 이벤트를 취소 해 준다.
}

const init = () => {
    addBtn.addEventListener('click', checkInput);
}

init();