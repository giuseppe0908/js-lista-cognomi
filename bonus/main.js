

//chiedere all'utente il suo cognome
  var cognome_utente = prompt("inserisci il tuo cognome");
  cognome_utente = cognome_utente[0].toUpperCase() + cognome_utente.substring(1);

  //creare array dei cognomi
  var cognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];
  var appoggio = 0;
  var swapp;

  console.log(cognomi);
  if (isNaN(cognome_utente)) {
     cognomi.push(cognome_utente);
  }

  do {
   swapp = false;
   var indice = 0;
   for (var i = 0; i < cognomi.length; i++) {
     indice++;
     if (cognomi[i] > cognomi[i+1] ) {
      appoggio = cognomi[i];
      cognomi[i] =  cognomi[i+1];
      cognomi[i+1] = appoggio;
      console.log(cognomi[i]);
      swapp = true;

    }if (cognome_utente == cognomi[i]) {
         document.getElementById("posizione").innerHTML= "la posizione del cognome che hai inserito è :" + " " +  indice+ " " + cognomi[i];
    }

   }

  } while (swapp);
  console.log(cognomi);
