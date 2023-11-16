// Function for getting user's location

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("openMapsButton").addEventListener("click", getLocation);
});

function getLocation() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPositionPts);
  } else {
  alert("Geolocation is not supported by this browser.");
  }
}