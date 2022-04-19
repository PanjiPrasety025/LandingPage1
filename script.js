const arah = document.querySelector(".arahpanah");
window.addEventListener("scroll", function() {
    windowPosition = window.scrollY > 5;
    arah.classList.toggle("scroll-active", windowPosition);
});