const navbarNav = document.querySelector(".navbar-nav");
document.getElementById("hamburger-menu").addEventListener("click", ()=>{
    navbarNav.classList.toggle("active")
})


// klik di luar sidebar untku menghilangkan nav
const hamburger= document.getElementById("hamburger-menu");
document.addEventListener('click',(e)=>{
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active")
    }
})

const searchForm = document.querySelector(".navbar .seacrh-form");
document.getElementById("search").addEventListener('click',()=>{
    searchForm.classList.toggle('active')
    document.getElementById("search-box").focus();
})

const navbar= document.querySelector(".navbar");

document.addEventListener('click',(e)=>{
    if(!searchForm.contains(e.target) && !navbar.contains(e.target)){
        searchForm.classList.remove('active');
    }
})