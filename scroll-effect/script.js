let lastScrollY = window.scrollY;
const header = document.getElementById("header");
let hideTimeout;

window.addEventListener("scroll", () => {
    clearTimeout(hideTimeout); 

    if (window.scrollY > lastScrollY) {
        header.style.top = "-70px";
        hideTimeout = setTimeout(() => {
            header.style.top = "0";
        }, 1000);
    } else {
        header.style.top = "0";
    }
    lastScrollY = window.scrollY;
});
