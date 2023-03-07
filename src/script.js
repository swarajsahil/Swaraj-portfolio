const hamburgerBtn=document.getElementById("hamburger");
const navList=document.getElementById("nav-list");
const sign=document.getElementById("sign");
// <i class="fa-solid fa-bars"></i>
// <i class="fa-solid fa-xmark"></i>
hamburgerBtn.addEventListener("click",()=>{
    if(navList.classList.contains("hide")){
        navList.classList.remove("hide");
        sign.classList.remove("fa-bars");
        sign.classList.add("fa-xmark");
    }else{
        navList.classList.add("hide");
        sign.classList.add("fa-bars");
        sign.classList.remove("fa-xmark");
    }
})