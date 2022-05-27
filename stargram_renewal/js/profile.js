const follow = document.getElementsByClassName('follow');
const modalClose = document.getElementsByClassName('modal-close');
const btnPlus = document.getElementsByClassName('btn-plus');
const modal = document.getElementById('modal');
const addCategory = document.getElementById('add-category');


//팔로우 클릭
function onFollow() {
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

    if(addCategory.style.display = 'block') {
        addCategory.classList.add('animated', 'fadeInUp');
    } else {
        addCategory.classList.remove('animated', 'fadeInUp');
    }

}

