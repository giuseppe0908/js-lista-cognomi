//chiedere all'utente il suo cognome
var cognome_utente = prompt("inserisci il tuo cognome");
cognome_utente = cognome_utente[0].toUpperCase() + cognome_utente.substring(1);
//creare array dei cognomi
var cognomi = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];
if (isNaN(cognome_utente)) {
  cognomi.push(cognome_utente)
}

console.log(cognome_utente,cognomi);
cognomi.sort();

var indice = 0;

for (var i = 0; i < cognomi.length; i++) {
  indice++;
  console.log(cognomi[i]);
  document.getElementById("lista").innerHTML += "<li>"+ cognomi[i] + "</li>";

  if (cognome_utente == cognomi[i]) {
       document.getElementById("posizione").innerHTML= "la posizione del cognome che hai inserito è :" + " " +  indice+ " " + cognomi[i];
  }


  // indice++;
  // console.log(indice+""+cognomi[i]);


}
