

//chiedere all'utente il suo cognome
  var cognome_utente = prompt("inserisci il tuo cognome");
  cognome_utente = cognome_utente[0].toUpperCase() + cognome_utente.substring(1);

  //creare array dei cognomi
  var cognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];
  var appoggio;

  console.log(cognomi);
  if (isNaN(cognome_utente)) {
     cognomi.push(cognome_utente);
  }




   var indice = 0;
   for (var i = 0; i < cognomi.length -1; i++) {

     for (var j = i+1; j < cognomi.length; j++) {

       if (cognomi[i] > cognomi[j] ) {
        appoggio = cognomi[i];
        cognomi[i] =  cognomi[j];
        cognomi[j] = appoggio;
        // console.log(cognomi[j]);
        }
      }
    }
    for (var i = 0; i < cognomi.length; i++) {
      indice++;
      document.getElementById("lista").innerHTML += "<li>"+ cognomi[i] + "</li>";

       if (cognome_utente == cognomi[i]) {

         document.getElementById("posizione").innerHTML= "la posizione del cognome che hai inserito è :" + " " + indice+ " " + cognomi[i];

     }
    }
