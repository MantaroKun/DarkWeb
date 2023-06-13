
var loginForm = document.getElementById("loginForm");
function handleLoginForm(event) { 
    event.preventDefault();
    botaoSubmit();
} 
loginForm.addEventListener('submit', handleLoginForm);

var formCad = document.getElementById("formCad");
function handleFormCad(event) {
  event.preventDefault();
  cadastrarUsuario();
}
formCad.addEventListener('submit', handleFormCad);

var loginForm = document.getElementById("loginForm");
function handleLoginForm(event) { 
  event.preventDefault();
  fazerLogin();
} 
loginForm.addEventListener('submit', handleLoginForm);

function cadastrarUsuario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senhaCad").value;

  // Enviar solicitação POST ao backend para cadastrar o usuário
  // Você pode usar o código de exemplo anterior para enviar os dados ao backend

  // Exemplo de como salvar os dados em uma lista no lado do cliente
  var usuario = { nome: nome, email: email, senha: senha };
  var usuarios = localStorage.getItem('usuarios');
  if (!usuarios) {
    usuarios = [];
  } else {
    usuarios = JSON.parse(usuarios);
  }
  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
  // Limpar os campos do formulário após o cadastro
  document.getElementById("nome").value = '';
  document.getElementById("email").value = '';
  document.getElementById("senhaCad").value = '';
  alert('Usuário cadastrado com sucesso!');
}

function fazerLogin() {
  var email = document.getElementById("loginEmail").value;
  var senha = document.getElementById("loginSenha").value;

  // Verificar se as credenciais correspondem aos registros existentes
  var usuarios = localStorage.getItem('usuarios');
  if (usuarios) {
    usuarios = JSON.parse(usuarios);
    var usuarioEncontrado = usuarios.find(function(usuario) {
      return usuario.email === email && usuario.senha === senha;
    });
    if (usuarioEncontrado) {
      // Login bem-sucedido
      alert('Login realizado com sucesso! Bem-vindo, ' + usuarioEncontrado.nome + '!');
    } else {
      // Credenciais inválidas
      alert('Credenciais inválidas. Por favor, tente novamente.');
    }
  } else {
    // Nenhum registro encontrado
    alert('Nenhum usuário registrado. Por favor, cadastre-se primeiro.');
  }

  // Limpar os campos do formulário após o login
  document.getElementById("loginEmail").value = '';
  document.getElementById("loginSenha").value = '';
}

function botaoCadSubmit(){
    var nomeinput = document.getElementById("nome").value;
    var sobrenomeinput = document.getElementById("sobrenome").value;
    var emailinput = document.getElementById("email").value;
    var sexoinput = document.getElementById("sexo").value;
    var senhacadinput = document.getElementById("senhaCad").value;
    var confirmesenhainput = document.getElementById("confirmesenha").value;

    // Criando um objeto com os dados do formulário
    var formData = new FormData();
          formData.append('nome', nomeinput);
          formData.append('sobrenome', sobrenomeinput);
          formData.append('email', emailinput);
          formData.append('sexo', sexoinput);
           formData.append('senhaCad', senhacadinput);
           formData.append('confirmesenha', confirmesenhainput);

    };

    // Enviar solicitação POST ao backend

    fetch('http://localhost:8000', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Tratar a resposta do backend
        if (data && data.nome) {
            window.alert("Nome cadastrado: " + data.nome);
        } else {
            window.alert("Erro ao cadastrar nome.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        window.alert("Erro ao enviar solicitação.");
    });

    // Enviando os dados para o servidor Python
    fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(function(response) {
        // Tratando a resposta do servidor
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro na solicitação POST.');
        }
    })
    .then(function(data) {
        // Manipulando os dados de resposta do servidor
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });

function botaoSubmit() {
    var logininput = document.getElementById("login").value;
    var senhainput = document.getElementById("senha").value;
    var isvalid = validateLogin(logininput, senhainput);
    if (isvalid == true) {
        //window.location.href = "../semaforo.html"
    } else {
        window.alert("Login ou Senha incorretos");
    }
}

function validateLogin(text1, text2) {
    if (text1 != login) {
        return false;
    }
    if (text2 != senha) {
        return false;
    }
    return true;
}