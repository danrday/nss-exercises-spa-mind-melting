var Predator = (function (pred) {

var elCarnivores = document.getElementById("elCarnivores");
var elHerbivores = document.getElementById("elHerbivores");


function showCarnivores(arrayOfCarnivores) {
     elCarnivores.innerHTML = arrayOfCarnivores.join(", ");

     console.log(arrayOfCarnivores);
   };

function showHerbivores(arrayOfHerbivores) {
     elHerbivores.innerHTML = arrayOfHerbivores.join(", ");

     console.log(arrayOfHerbivores);
   };



Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);

return pred;

})(Predator || {});