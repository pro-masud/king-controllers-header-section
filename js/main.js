// get all values here
const button = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header-nav");

button.addEventListener("click", () => {

    // if(headerNav.classList.contains("show-nav")){
    //     headerNav.classList.remove("show-nav");
    // }else{
    //     headerNav.classList.add("show-nav");
    // }

    headerNav.classList.toggle("show-nav");
});