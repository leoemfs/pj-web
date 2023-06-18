// Função para converter os dados do formulário em um objeto JSON
function toJson() {
    // ... seu código aqui ...
}

// Função para limpar os campos do formulário
function limpar() {
    // ... seu código aqui ...
}

// Função para capturar e enviar os dados do formulário
function fazPost(url, body) {
  
    // Obter os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    // Obter os demais campos do formulário
  
    // Criar objeto com os dados do usuário
    const usuario = {
      nome: nome,
      email: email,
      // Campos adicionais do usuário
    };
  
    // Fazer a requisição para a rota da API
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.example.com/usuarios'); // Substitua com a URL correta da sua API
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onload = function() {
      if (xhr.status === 201) {
        // Sucesso: exibir mensagem ao usuário
        alert('Usuário cadastrado com sucesso!');
      } else {
        // Erro: exibir mensagem de erro
        alert('Ocorreu um erro ao cadastrar o usuário. Tente novamente mais tarde.');
      }
    };
  
    xhr.onerror = function() {
      // Erro: exibir mensagem de erro
      alert('Ocorreu um erro ao cadastrar o usuário. Tente novamente mais tarde.');
    };
  
    xhr.send(JSON.stringify(usuario));
  }
  
  // Adicionar ouvinte de evento ao formulário
  const form = document.getElementById('formUsuario');
  form.addEventListener('submit', enviarDadosUsuario);
  



// Função para salvar os dados do formulário em uma tabela (versão 2)
function salvar2() {
    // ... seu código aqui ...
}

// Função para salvar os dados do formulário em uma tabela (versão 3)
function salvar3() {
    // ... seu código aqui ...
}
