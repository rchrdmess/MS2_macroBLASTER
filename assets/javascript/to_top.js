/*global document*/

// Function to return to top of page when clicked. Courtesy of W3 Schools

let toTop = document.getElementById("toTop");
toTop.addEventListener("click", toTopFunction);

function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}