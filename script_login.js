
var loginForm = document.getElementById("loginForm");
function handleLoginForm(event) { 
     event.preventDefault();
     botaoSubmit();
} 
loginForm.addEventListener('submit', handleLoginForm);

var formCad = document.getElementById("formCad");
function handleFormCad(event){
     event.preventDefault();
     botaoCadSubmit();
}
formCad.addEventListener('submit', handleFormCad);

function botaoCadSubmit(){
     var nomeinput = document.getElementById("nome").value
     var sobrenomeinput = document.getElementById("sobrenome").value
     var emailinput = document.getElementById("email").value
     var sexoinput = document.getElementById("sexo").value
     var senhacadinput = document.getElementById("senhaCad").value
     var confirmesenhainput = document.getElementById("confirmesenha").value
     debugger
}

function botaoSubmit() {
     var logininput = document.getElementById("login").value;
     var senhainput = document.getElementById("senha").value;
     var isvalid = validateLogin(logininput, senhainput)
     if (isvalid == true) {
          //window.location.href = "../semaforo.html"
     }
     else {
          window.alert("Login ou Senha incorretos")
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