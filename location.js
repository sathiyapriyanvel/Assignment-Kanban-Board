function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var location = document.getElementById("location");
  location.innerHTML =
    "Location Details Latitude: " +
    position.coords.latitude +
    " Longitude: " +
    position.coords.longitude;
}
