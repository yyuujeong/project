// const inputId = document.querySelector("#id");
// const inputPwd = document.querySelector("#pw");
// const btn = document.querySelector("#btn");

// function loginBtn() {
//     let idValue = inputId.value;
//     let pwValue = inputPwd.value;

//     if(idValue >= 1 && pwValue.length >= 1){
//         btn.classList.add("cc");       
//     } else {
//         btn.classList.remove("cc");
//     }
// };

// inputId.addEventListener('keyup', loginBtn);
// inputPwd.addEventListener('keyup', loginBtn);

const inputId = document.querySelector("#id");
const inputPwd = document.querySelector("#pw");
const btn = document.querySelector("#btn");

btn.classList.add("prev-color");

function loginBtn() {
    if(inputId.value.length >=10 && inputPwd.value.length >= 7) {
        btn.classList.remove("prev-color");
        btn.classList.add("next-color");
    }
}
