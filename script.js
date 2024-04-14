function toggleIcons() {
    var menuIcon = document.getElementById("menu");
    var closeIcon = document.getElementById("close");

    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
}
function toggleNavigation() {
        var navElement = document.querySelector("nav");
        navElement.classList.toggle("shownav");
        toggleIcons();
    }
    
    // Attach click event listeners to menu and close icons
    document.getElementById("menu").addEventListener("click", toggleNavigation);
    document.getElementById("close").addEventListener("click", toggleNavigation);    