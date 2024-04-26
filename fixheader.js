window.onscroll = function() { fixheader() };

// Get the header
var header = document.getElementById("fixheader");

var sticky = header.offsetTop;

function fixheader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
