var prixHT = Number(prompt("Entrez le prix HT :")); // Saisie du prix HT
var tauxTVA = 19.6 / 100; // on fixe la TVA
var prixTTC = prixHT * (1 + tauxTVA); // on définit ce qu'est un prix TTC

console.log("Le prix TTC est de " + prixTTC + " euros.");