window.onload = function () {
    // reponsive menu
    let m = document.getElementById("menu-items");
    let d = document.getElementById("show-menu");
    d.addEventListener("click", function () {
        m.style.left = "65%";
    });

    let e = document.getElementById("esc");
    e.addEventListener("click", function () {
        m.style.left = "-100%";
    });
}