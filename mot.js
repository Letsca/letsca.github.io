var mot = "Anacccconda";

console.log("Le mot Anaconda contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + mot.toLowerCase() + ".");
console.log("Il s'écrit en majuscules " + mot.toUpperCase() + ".");

function compterNbVoyelles(mot) {
  var nbVoyelles = 0;
      for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
          }
              }
              return nbVoyelles;
          }
var voyelles = compterNbVoyelles(mot);
var longueur = mot.length;
var consonnes = 
console.log(mot.length - compterNbVoyelles(mot));
