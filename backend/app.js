const express = require('express');
const bodyParser = require('body-parser');
//configurando
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

const con = require('./config/db-config');
app.get('/', (req, res) => {
  return res.json({titulo: "exemplo json"})
});
//rotas
const rotaUsuario = require('./routes/rota-usuario');
//const rotaEmprestimo = require('./routes/rota-emprestimo');
app.use('/usuarios', rotaUsuario);


//app.use('/api/usuarios/cpf:cpf', rotaUsuario);
//app.use('/api/emprestimos', rotaEmprestimo);

//star do servidor
app.listen(7000, () => {
  console.log('Servidor iniciado na porta 7000');
});
