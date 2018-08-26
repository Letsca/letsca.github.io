var mot = "Anacccconda";

// console.log("Le mot Anaconda contient " + mot.length + " caractère(s)");
// console.log("Il s'écrit en minuscules " + mot.toLowerCase() + ".");
// console.log("Il s'écrit en majuscules " + mot.toUpperCase() + ".");

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
var consonnes = (longueur - voyelles);
// console.log("Il contient " + voyelles + " voyelle(s) et " + consonnes + " consonne(s).");

function inverser(mot) {
  var motInverse = "";
  for (var i = 0; i < mot.length; i++) {
    motInverse = mot[i] + motInverse;
  }
  return motInverse;
}
// console.log("Il s'écrit à l'envers " + inverser(mot));

//  var motInverse = inverser(mot);
//  if (motInverse.toLowerCase() === mot.toLowerCase()) {
//    console.log("C'est un palindrome.");
// } else {
//    console.log("Ce n'est pas un palindrome.");
//}

// Renvoie un mot écrit à l'envers
function inverser(mot) {
    var motInverse = "";
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }
    return motInverse;
}

// Renvoie l'équivalent "leet speak" d'une lettre
function trouverLettreLeet(lettre) {
  // Par défaut, la lettre ne change pas
  var lettreLeet = lettre;
  switch (lettre.toLowerCase()) {
    case "a":
    lettreLeet = "4";
    break;
    case "b":
    lettreLeet = "8";
    break;
    case "c":
    lettreLeet = "2";
    break;
    case "e":
    lettreLeet = "3";
    break;
    case "i":
    lettreLeet = "*";
    break;
    case "l":
    lettreLeet = "1";
    break;
    case "o":
    lettreLeet = "0";
    break;
    case "s":
    lettreLeet = "5";
    break;
    case "t":
    lettreLeet = "7";
    break;
    case "u":
    lettreLeet = "6"
    break;
    // ...
  }
  return lettreLeet;
}

// Renvoie un mot converti en "leet speak"
function convertirEnLeetSpeek(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}

// console.log(convertirEnLeetSpeek(mot));

var motSaisi = prompt("Veuillez saisir un mot :");
var longueurMot = motSaisi.length;

console.log("Le mot " + motSaisi + " contient " + longueurMot + " caractère(s)");
console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());

var nbVoyelles = compterNbVoyelles(motSaisi);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot - nbVoyelles) + " consonne(s)");

var motInverse = inverser(motSaisi);
console.log("Il s'écrit à l'envers " + inverser(motSaisi));

if (motInverse.toLowerCase() === motSaisi.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}

var motLeetSpeak = convertirEnLeetSpeek(motSaisi);
console.log("Il s'écrit en leet speak " + motLeetSpeak);
