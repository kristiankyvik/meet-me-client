var TinderGeolocation = function(){
 this.latitude = '';
 this.longitude = '';


 this.getCoords = function(success) {
   navigator.gelocation.getCurrentPosition(success, showError);
 };

 this.getMap = function(latitude, longitude,zoom, width, length){
   this.latitude = latitude;
   this.longitude = longitude;
   return "http://maps.googleapis.com/maps/api/staticmap?center=" 
           + latitude +","+longitude+
           "&zoom="+zoom+"&size="+width+"x"+length};

           
     this.showError = function(error) {
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
}