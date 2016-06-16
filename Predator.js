
var Predator = (function (pred) {


var carnivores = [];
var herbivores = [];


  return {

   loadCarnivores: function (callBackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        callBackToInvoke(carnivores);
        console.log()
      });
    },

     loadHerbivores: function (callBackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
        callBackToInvoke(herbivores);
        console.log()
      });
    }

  }    


return pred;

})(Predator || {});