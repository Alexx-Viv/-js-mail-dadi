var emailList = ["admin@admin.com", "user@user.com", "test@test.com"];
var userEmail = prompt("Inserire la propria email");
var message = "Utente non trovato";


if (!userEmail) {
  alert(
    "Email non valida, icaricaricare la pagina e inserire una email valida"
  );
} else {
  for (var i = 0; i < emailList.length; i++) {
      if(emailList[i] == userEmail){
          message = "Bentornato utente!"
      }
  }
  alert(message);
}
