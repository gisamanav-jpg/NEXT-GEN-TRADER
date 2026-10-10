const menuBtn = document.getElementById("menuBtn");

const closeMenu = document.getElementById("closeMenu");

const sideMenu = document.getElementById("sideMenu");

const overlay = document.getElementById("overlay");


function openMenu() {

    sideMenu.classList.add("active");

    overlay.classList.add("active");

}


function closeSideMenu() {

    sideMenu.classList.remove("active");

    overlay.classList.remove("active");

}


menuBtn.addEventListener("click", openMenu);


closeMenu.addEventListener("click", closeSideMenu);


overlay.addEventListener("click", closeSideMenu);


document.querySelectorAll(".side-menu a").forEach(link => {

    link.addEventListener("click", closeSideMenu);

});
