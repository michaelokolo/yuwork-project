const navSearchForm = document.querySelector('.container-right .search-form');
const navSearchBar = document.querySelector('.container-right .search-form input');
const navTalentbtn = document.querySelector('.container-right .search-form button');
const menubar = document.querySelector('.menu-bar');
const menu = document.querySelector('.main-nav .container-left');
const signUplink = document.querySelector('header .container-right .signup-link');
const hamburgerEl = document.querySelector('.hamburger::before');
const dropdownbtnEl = document.querySelectorAll('.dropdown-menu-left button');
const dropdownbtn1 = document.querySelector('.dropdown-menu .dropdown-menu-left .btn1')
const dropdownright1 = document.querySelector('.main-nav .container-left .dropdown-menu .dropdown-menu-right')
const dropdownbtn2 = document.querySelector('.dropdown-menu .dropdown-menu-left .btn2');
const dropdownright2 = document.querySelector('.dropdown-menu-right-second');
const dropdownright3 = document.querySelector('.dropdown-menu .dropdown-menu-right-third');
const dropdownbtn3 = document.querySelector('.dropdown-menu .dropdown-menu-left .btn3');
const findtalentdropdown = document.querySelector('header .main-nav .container-left .dropdown-menu');
const findtalentlink = document.querySelector('header .main-nav .container-left .top');
const imgEl = document.querySelector('.about img');
const imagebar = document.querySelectorAll('.about .img-section .bars li');
const barElements = document.querySelectorAll('.about .bars ul li div');


 function changeFormColor(){
    navSearchForm.style.backgroundColor = "#d8e0d8";
    navSearchBar.style.backgroundColor = "#f7faf7";
    navTalentbtn.style.backgroundColor = "#d8e0d8";
    
}

function normalFormColor(){
    navSearchForm.style.backgroundColor = "white"
     navSearchBar.style.backgroundColor = "white"
     navTalentbtn.style.backgroundColor = "white";
}

navSearchBar.addEventListener('mouseover', changeFormColor);
navSearchBar.addEventListener('mouseout', normalFormColor);

function changeFormColorTalent(){
    navSearchForm.style.backgroundColor = "#d8e0d8";
    navTalentbtn.style.backgroundColor = "#f7faf7";
    navSearchBar.style.backgroundColor = "#d8e0d8";

}

function normalFormColorTalent(){
    navSearchForm.style.backgroundColor = "white"
    navTalentbtn.style.backgroundColor = "white"
    navSearchBar.style.backgroundColor = "white";
}

navTalentbtn.addEventListener('mouseover', changeFormColorTalent);
navTalentbtn.addEventListener('mouseout', normalFormColorTalent);

function activateMenu(){
    menu.classList.toggle("active");
    signUplink.classList.toggle('active');
}

menubar.addEventListener('click', activateMenu);



dropdownbtn1.addEventListener('mouseover', ()=>{
    dropdownright1.classList.add('active1');
    dropdownright2.classList.remove('active2');
    dropdownbtn1.style.backgroundColor = "var(--font-hover-color)"
})

dropdownbtn1.addEventListener('mouseout', ()=>{
    dropdownright1.classList.remove('active1');
    dropdownbtn1.style.backgroundColor = "white"
})

dropdownbtn2.addEventListener('mouseover', ()=>{
    dropdownright2.classList.add('active2');
    dropdownright3.classList.remove('active3');
    dropdownbtn2.style.backgroundColor = "var(--font-hover-color)"
})

dropdownbtn2.addEventListener('mouseout', ()=>{
    dropdownright2.classList.remove('active2');
    dropdownbtn2.style.backgroundColor = "white"
})

dropdownbtn3.addEventListener('mouseover', ()=>{
    dropdownright3.classList.add('active3');
    dropdownbtn3.style.backgroundColor = "var(--font-hover-color)"
})

dropdownbtn3.addEventListener('mouseout', ()=>{
    dropdownright3.classList.remove('active3');
    dropdownbtn3.style.backgroundColor = "white"
})


    findtalentlink.addEventListener('click', ()=>{
        findtalentdropdown.classList.toggle('active6')
    })

const imageslink = [
    "about-img1.jpg",
    "about-img2.jpg",
    "about-img3.jpg",
    "about-img4.jpg"
]
// let i = 0;
// let width = 0;
// let a = 0;
// function imageSlide(){
//     imgEl.src = imageslink[i];
//     i++
//     if(i === imageslink.length){
//         i = 0;
//     }
//     setTimeout(imageSlide, 4000);
// }

//imageSlide();
let i = 0;
let width = 0;
let a = 0;
function mybar(){
    
    barElements[a].style.width = width + "%"
    imgEl.src = imageslink[i];
    width++
    if(width === 101){
        i++
        a++
        width = 0;
       
    }
    if(barElements[3].style.width === "101%"){
        i = 0;
    }
    
    setTimeout(mybar, 40);
   
}

mybar();






