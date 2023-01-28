const navSearchForm = document.querySelector('.container-right .search-form');
const navSearchBar = document.querySelector('.container-right .search-form input');
const navTalentbtn = document.querySelector('.container-right .search-form button');

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