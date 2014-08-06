var TinderNotification = (function () {
  var instance;

  function init(){

    function notificate (message, options) {
      if (window.Notification){
        permissionStatus(message, options);
      } else {
        console.log("ERROR - Your browser doesn't support notifications");
      }
    }

    function permissionStatus(message, options) {
      if (Notification.permission !== 'denied') {
        Notification.requestPermission();
        sendNotification(message, options);
      } else {
        console.log('ERROR - The user did not grant permission');
      }
    }

    function sendNotification(message, options) {
      var notification = new Notification(message, options);
    }

    return {
      sendNotification: notificate
    }
  }

  return function(){
      if (!instance){
        instance = init();
      }
      return instance;
    }
  

})();


// TinderNotification().sendNotification("Hello", {icon: "http://lorempixel.com/90/90", body: "Hej!"});