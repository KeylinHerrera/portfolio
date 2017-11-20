var openMenu = document.getElementById("buttonOpen");
var closeMenu = document.getElementById("buttonClose");
var menuWrapper = document.getElementById("menuContainer");

function toggleMenu() {
    if (menuWrapper.style.display = "none") {

        menuWrapper.style.display = "table";

    } else {
        menuWrapper.style.display = "none";
    }
}

function toggleMenuClose() {
    menuWrapper.style.display = "none";

}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenuClose);