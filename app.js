var burger = document.getElementById("ham");
var burg1 = document.getElementById("one");
var burg2 = document.getElementById("two");
var burg3 = document.getElementById("three");
var sidebar = document.getElementById("sb");
var isToggled = true;
function toggle() {
    if (isToggled) {
        sidebar.style.marginLeft = "-200px";
        burger.style.marginLeft = "240px";
        burg1.style.backgroundColor = "#333";
        burg2.style.backgroundColor = "#333";
        burg3.style.backgroundColor = "#333";
    }

    else if (!isToggled) {
        sidebar.style.marginLeft = "0";
        burger.style.marginLeft = "160px";
        burg1.style.backgroundColor = "#eee";
        burg2.style.backgroundColor = "#eee";
        burg3.style.backgroundColor = "#eee";

    }
    isToggled = !isToggled;
}