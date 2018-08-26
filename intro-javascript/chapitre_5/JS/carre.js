function carre(x) {
  var x = (x * x);
  return x;
}

var nombre = 0;
while (nombre <= 10) {
  console.log(carre(nombre));
  nombre++;
}
