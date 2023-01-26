const findTalentBtn1 = document.querySelector(".left-nav-item-dropdown-btn1");
const findTalentBtn2 = document.querySelector(".left-nav-item-dropdown-btn2");
const findTalentBtn3 = document.querySelector(".left-nav-item-dropdown-btn3");


function changeContentFindTalentBtn1(){
    findTalentBtn1.style.backgroundColor = "#f0f7ee"

}

function changeContentFindTalentBtn2(){
    findTalentBtn2.style.backgroundColor = "#f0f7ee"
}

function changeContentFindTalentBtn3(){
    findTalentBtn3.style.backgroundColor = "#f0f7ee"
}


findTalentBtn2.addEventListener('mouseenter', changeContentFindTalentBtn2)