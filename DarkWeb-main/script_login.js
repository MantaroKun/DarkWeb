
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
     var data = {'nome': nomeinput,
         'sobrenome': sobrenomeinput,
        'email': emailinput,
        'sexo':sexoinput,
        'senhaCad': senhacadinput,
        'confirmesenha': confirmesenhainput};

        let myData = null;

        fetch('http://localhost:8000/data')
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              myData = data;
              console.log(myData);
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

        fetch('http://localhost:8000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });

}

function botaoSubmit() {
  let myData = null;

  fetch('http://localhost:8000/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        myData = data;
        console.log(myData);
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
      var isValid = false;
      
      var logininput = document.getElementById("login").value;
      var senhainput = document.getElementById("senha").value;
      for (var i = 0; i < myData.length; i++) {
          var userData = myData[i];
          if (userData.login === logininput && userData.senha === senhainput) {
              isValid = true;
              break;
          }
      }
     var isvalid = validateLogin(logininput, senhainput)
     if (isvalid == true) {
          window.location.href = "../semaforo.html"
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