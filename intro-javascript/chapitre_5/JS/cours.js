function direBonjour(prenom){
  var message = "Bonjour, " + prenom + "! ";
  return message;
}

console.log(direBonjour("Arthur"));
console.log(direBonjour("Aude"));


// Déclaration de la fonction maFonction
function maFonction(param1, param2, ...) {
    // Instructions pouvant utiliser param1, param2, ...
}

// Appel de la fonction maFonction
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maFonction(arg1, arg2, ...);

// Autre fonction
console.log(Math.min(4.5, 5)); // Affiche 4.5
console.log(Math.min(19, 9)); // Affiche 9
console.log(Math.min(1, 1)); // Affiche 1

console.log(Math.random()); // Affiche un nombre aléatoire entre 0 et 1
