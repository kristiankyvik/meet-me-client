
var TinderQuery = function() {
  this.domElement = "";
};

TinderQuery.prototype.query = function(element) {
  if (element.charAt(0) === '#'){
    this.domElement = document.getElementById(element.substr(1));
  } else {
     this.domElement = document.getElementsByClassName(element.substr(1))[0];
  };
  return this;
};

TinderQuery.prototype.html = function(text) {
  this.domElement.innerHTML = text;
};


TinderQuery.prototype.on = function(evt, consequence) {
  this.domElement.addEventListener(evt, consequence);
};
