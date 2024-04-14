    function toggleNavigation() {
        var navElement = document.querySelector("nav");
        navElement.classList.toggle("shownav");
    }
    
    // Attach click event listeners to menu and close icons
    document.getElementById("menu").addEventListener("click", toggleNavigation);
    document.getElementById("close").addEventListener("click", toggleNavigation);
    

document.getElementById("menu").addEventListener("click", toggleNav);
document.getElementById("close").addEventListener("click", toggleNav);