const navbarNav = document.querySelector(".navbar-nav");
document.getElementById("hamburger-menu").addEventListener("click", ()=>{
    navbarNav.classList.toggle("active")
})


// klik di luar element
const hamburger= document.getElementById("hamburger-menu");
document.addEventListener('click',(e)=>{
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active")
    }
})

const searchForm = document.querySelector(".navbar .seacrh-form");
document.getElementById("search").addEventListener('click',(e)=>{
    searchForm.classList.toggle('active')
    document.getElementById("search-box").focus();
    e.preventDefault();
})

const sb= document.querySelector("#search");

document.addEventListener('click',(e)=>{
    if(!searchForm.contains(e.target) && !sb.contains(e.target)){
        searchForm.classList.remove('active');
    }
})