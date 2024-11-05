var bars = document.getElementsByClassName("bars")[0];
bars.addEventListener("click", showMenu);
function showMenu(){
    var navListMobile = document.getElementsByClassName("nav-list-mobile")[0];

    if(navListMobile.style.display == "block") {
        navListMobile.style.display = "none";
        bars.classList.remove("fa-xmark");
    }
    else {
        navListMobile.style.display = "block";
        bars.classList.add("fa-xmark");
    }
}
 