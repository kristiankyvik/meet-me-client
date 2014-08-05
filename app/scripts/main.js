var x = document.getElementById("getPosition");

function get_location() {
   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition,showError);
   } else {
       x.innerHTML = "Geolocation is not supported by this browser.";
   }
}

function showPosition(position) {
   var latlon = position.coords.latitude+","+position.coords.longitude;
   var heading = 0
   alert (latlon)
}

function showError(error) {
   switch(error.code) {
       case error.PERMISSION_DENIED:
           x.innerHTML = "User denied the request for Geolocation."
           break;
       case error.POSITION_UNAVAILABLE:
           x.innerHTML = "Location information is unavailable."
           break;
       case error.TIMEOUT:
           x.innerHTML = "The request to get user location timed out."
           break;
       case error.UNKNOWN_ERROR:
           x.innerHTML = "An unknown error occurred."
           break;
   }
}
