var tinderNotifications = (function () {
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
      notificate: notificate
    }
  }

  return {
    getInstance: function(){
        if (!instance){
          instance = init();
        }
        return instance;
      }
    }
})();

// Example: 
// var tn = tinderNotifications.getInstance();
// var options = {
//   icon: "http://lorempixel.com/100/100",
//   body: "You have saved 'Arena' location"
// };

// tn.notificate("Congratulations!", options);