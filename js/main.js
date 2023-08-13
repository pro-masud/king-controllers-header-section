// get all values here
const button = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header-nav");
const disclosureBtn = document.querySelector(".sel-disclosure");
const itemsContainer = document.querySelector(".sel-itemsContainer");


button.addEventListener("click", () => {

    // if(headerNav.classList.contains("show-nav")){
    //     headerNav.classList.remove("show-nav");
    // }else{
    //     headerNav.classList.add("show-nav");
    // }

    headerNav.classList.toggle("show-nav");
});



// selbtn get value 

disclosureBtn.addEventListener("click", function(){

    itemsContainer.classList.toggle("showSet");
});