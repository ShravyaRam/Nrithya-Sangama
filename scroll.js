window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var content = document.getElementById("container");
    var headerHeight = header.offsetHeight + 100;

    if (window.scrollY > headerHeight) {
        header.classList.add("fixed");
        content.style.marginTop = headerHeight + "px"; // Adjust content margin when header becomes fixed
    } else {
        header.classList.remove("fixed");
        content.style.marginTop = 0; // Reset content margin when header is not fixed
    }
});