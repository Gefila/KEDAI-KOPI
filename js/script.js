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