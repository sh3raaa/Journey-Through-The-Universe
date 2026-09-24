window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var stars = document.querySelector(".stars");
    stars.style.transform = "translateY(" + scrollPosition * 0.15 + "px)";
});
