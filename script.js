let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector('.search-form');
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('#menu-bar');


searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
})

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    menuBar.classList.toggle('active');
})