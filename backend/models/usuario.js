const con = require('../config/db-config');

const usuario = {};

usuario.create = function(nome, cpf, telefone, email, atribuicao, callback) {
  //sql para executar
  const query = 'INSERT INTO usuario (nome, cpf, telefone, email, atribuicao) VALUES (?, ?, ?, ?, ?)';
  const values = [nome, cpf, telefone, email, atribuicao];

  con.query(query, values, (erro, results) => {
    if (erro) {
      console.error('Erro ao criar usuario:', erro);
      callback(erro, null);
    } else {
      callback(null, results.id_usuario);
    }
  });
};

module.exports = usuario;