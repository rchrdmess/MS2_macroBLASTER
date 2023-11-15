// Functions for personal trainer search using Google Maps

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("openMapsButtonPts").addEventListener("click", getLocationPts);
});

function getLocationPts() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPositionPts);
  } else {
  alert("Geolocation is not supported by this browser.");
  }
}

function showPositionPts(position) {
  let userLocationPlaceID = position.coords.latitude + "," + position.coords.longitude;
  let searchQuery = "personal trainers";
  let mapsLink = "https://www.google.com/maps/search/?api=1&query=" + searchQuery + "&query_place_id=" + userLocationPlaceID;
  window.open(mapsLink, '_blank');
}


// Functions for physiotherapist search using Google Maps


document.addEventListener("DOMContentLoaded", function () {
document.getElementById("openMapsButtonPhys").addEventListener("click", getLocationPhys);
});

function getLocationPhys() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPositionPhysio);
  } else {
  alert("Geolocation is not supported by this browser.");
  }
}

function showPositionPhysio(position) {
  let userLocationPlaceID = position.coords.latitude + "," + position.coords.longitude;
  let searchQuery = "physiotherapists";
  let mapsLink = "https://www.google.com/maps/search/?api=1&query=" + searchQuery + "&query_place_id=" + userLocationPlaceID;
  window.open(mapsLink, '_blank');
}



// Functions for gyms search using Google Maps

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("openMapsButtonGyms").addEventListener("click", getLocationGyms);
});

function getLocationGyms() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPositionGyms);
  } else {
  alert("Geolocation is not supported by this browser.");
  }
}

function showPositionGyms(position) {
  let userLocationPlaceIDGyms = position.coords.latitude + "," + position.coords.longitude;
  let searchQuery = "gyms";
  let mapsLink = "https://www.google.com/maps/search/?api=1&query=" + searchQuery + "&query_place_id=" + userLocationPlaceIDGyms;
  window.open(mapsLink, '_blank');
}




// Functions for nutritionist search using Google Maps

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("openMapsButtonNutrition").addEventListener("click", getLocationNutrition);
});

function getLocationNutrition() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPositionNutrition);
  } else {
  alert("Geolocation is not supported by this browser.");
  }
}

function showPositionNutrition(position) {
  let userLocationPlaceIDNutrition = position.coords.latitude + "," + position.coords.longitude;
  let searchQuery = "nutritionists near me";
  let mapsLink = "https://www.google.com/maps/search/?api=1&query=" + searchQuery + "&query_place_id=" + userLocationPlaceIDNutrition;
  window.open(mapsLink, '_blank');
}