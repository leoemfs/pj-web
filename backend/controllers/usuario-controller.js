//incluir as bibliotecas
const usuario = require('../models/usuario');

const usuarioController = {};

usuarioController.criarUsuario = function (req, res) {

    const { nome, cpf, telefone, email, atribuicao } = req.body;
    console.log('Dados recebidos:', nome, cpf, telefone, email, atribuicao);

    usuario.create(nome, cpf, telefone, email, atribuicao, function (erro, usuarioId) {
        if (erro) {
            console.error('Erro ao criar usuário:', erro);
            //res.status(500).json({ error: 'Erro ao criar usuário' });
        } else {
            console.error('Usuario criado com sucesso: ', usuarioId);
            //res.status(201).json({ message: 'Usuário criado com sucesso', usuarioId });
        }
    });
};
module.exports = usuarioController;
