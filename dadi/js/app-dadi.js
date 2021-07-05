var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);

var message = "pareggio";

if (player1 > player2) {
  message = 'Giocatore 1 ha vinto';
} else if (player1 < player2) {
  message = 'Giocatore 2 ha vinto';
}

alert(message);
