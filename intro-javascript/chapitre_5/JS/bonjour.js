function direBonjour(prenom , nom) {
  var message = "Bonjour, " + prenom + " " + nom + " !";
  return message;
}
prenom = prompt ("Saisissez votre prénom :")
nom = prompt ("Saisissez votre nom :")

console.log(direBonjour(prenom , nom))
