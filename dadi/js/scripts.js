// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// 1. Generazione numeri
var dadoUtente =Math.floor(Math.random() * 6) + 1;
var dadoComputer =Math.floor(Math.random() * 6) + 1;

// 2. Stampare numeri su documento
document.getElementById('utente').innerHTML ="Il tuo numero è: " + dadoUtente;
document.getElementById('computer').innerHTML ="Il numero del computer è: " + dadoComputer;

// 3. Confrontare numeri
var risultato = "Ha vinto ";
if ( dadoUtente > dadoComputer) {
  risultato += " utente!";
} else if ( dadoUtente < dadoComputer ) {
  risultato += " computer!";
} else {
  risultato = "Parità!";
}

// 4. Dichiarare risultato
document.getElementById('risultato').innerHTML = risultato;
