const mysql = require('mysql2');
//configurando a conexao
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port:3306,
  database: 'biblioteca_db'
});

//verificar se a conexao foi realizada
con.connect((err) => {
  if (err) {
    console.error('Deu ruim! Erro ao conectar DB.');
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});
module.exports = con;
