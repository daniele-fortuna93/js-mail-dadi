// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1. Creazione array lista email
var listaEmail = ["mario@libero.it", "pippo@gmail.com", "franco@yahoo.it"];

// 2. Richiesta email utente
var userEmail = prompt("Inserisci la tua email.");
userEmail = userEmail.toLowerCase();

// 3. Controllare se l'email dell'utente è presente nella lista
var accesso = false;

for (var i = 0; i < listaEmail.length; i++) {
  if ( listaEmail[i] === userEmail ) {
    accesso = true;
  }
}
// 4. Stampare autorizzazione accesso
if ( accesso === true) {
  document.getElementById('autorizzo').innerHTML = ("Accesso autorizzato, la sua email è presente nel sistema.");
} else {
  document.getElementById('autorizzo').innerHTML = ("Accesso autorizzato, la sua email non è presente nel sistema.");
}
