function displayMenu() {
        const navMenu = document.getElementById("navMenu");
        const navBars = document.getElementById("navBars");
        const mainNav = document.getElementById("mainNav");

        if (navMenu.style.display === "block") {
                navMenu.style.display = "none";
                mainNav.style.outline = "#04a5e5 solid 2px ";
                navBars.style.outline = "none";
        } else {
                navMenu.style.display = "block";
                mainNav.style.outline = "none";
                navBars.style.outline = "#04a5e5 solid 2px";
        }
}
