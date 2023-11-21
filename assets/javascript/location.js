/*global document*/

// Function to set the event listener once the all the DOM content is loaded. The event listener will then run the findGym function when the element with the openMapsButton ID is clicked

document.addEventListener("DOMContentLoaded", function () {
    let openMapsButton = document.getElementById("openMapsButton");
    openMapsButton.addEventListener("click", findGym);
});

// This API takes the user's location from the browser and inserts it into a Google Map search for "Gyms", which opens in a new window

function findGym() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let url = `https://www.google.com/maps/search/gyms/@${latitude},${longitude},15z`;
            window.open(url, "_blank");
        }, function (error) {
            console.error("Error getting location:", error.message);
        });
    } else {
        window.alert("Geolocation is not supported by your browser");
    }
}
