var moyenne = prompt("Entrez une moyenne de baccalauréat : ");
if (moyenne < 10 && moyenne >= 8) {
	console.log("Vous allez au rattrapage.");
} else if (moyenne < 8) {
	console.log("Sorry loser");
} else if (moyenne >= 10 && moyenne < 12) {
	console.log("Felicitations, vous avez le baccalauréat");
} else if (moyenne >= 12 && moyenne < 14) {
	console.log("Felicitations, vous avez le baccalauréat mention assez bien");
} else if (moyenne >= 14 && moyenne < 16) {
	console.log("Felicitations, vous avez le baccalauréat mention bien");
} else if (moyenne >= 16) {
	console.log("Felicitations, vous avez le baccalauréat mention très bien");
} else {
console.log("fuck off");
}	
