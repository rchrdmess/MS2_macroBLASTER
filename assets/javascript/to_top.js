// The below comment is used on every page to declare global propertiesr properties. Advised to use this by Chatgpt to prevent JSLint from thinking certain commands are variables

/*global document*/

// The 'toTop' element is defined and linked to the toTopFunction function, which triggers when toTop element is clicked

let toTop = document.getElementById("toTop");
toTop.addEventListener("click", toTopFunction);

// Function to return to top of page when clicked. Courtesy of W3 Schools

function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
