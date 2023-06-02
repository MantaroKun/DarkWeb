

var login = "login"

var senha = "senha";

function botaoSubmit() {
     var logininput = document.getElementById("login").value;
     var senhainput = document.getElementById("senha").value;
     var isvalid = validateLogin(logininput, senhainput)
     if (isvalid == true) {
          window.location.href = "../semaforo.html"
     }
     else {
          window.alert("deu errado")
     }


}
function validateLogin(text1, text2) {
     if (text1 != login) {
          return false
     }
     if (text2 != senha) {
          return false
     }
     return true
}