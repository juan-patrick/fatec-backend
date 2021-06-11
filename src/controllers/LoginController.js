const Usuario = require('../models/Usuario');

const { createToken } = require('./TokenController');
const bcryptjs = require('bcryptjs');

module.exports = {
  async show(req, res) {
    const { tokenId } = req;
    const usuario = await Usuario.findByPk(tokenId);

    if (!usuario) {
      return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json(usuario);
  },
  async store(req, res) {
    const { emailUsuario, senhaUsuario } = req.body;

    const signIn = await Usuario.findOne({ where: { emailUsuario } }, '+senhaUsuario').catch((err) => {
      return res.status(400).json({ error: err });
    });

    if (!signIn) {
      return res.status(400).json({ error: 'Usuário inválido.' });
    }

    if (!signIn.status) {
      return res.status(400).json({ error: 'Usuário inativo.' });
    }

    const checkPass = await bcryptjs.compare(senhaUsuario, signIn.senhaUsuario);

    if (!checkPass) {
      return res.status(400).json({ error: 'Senha inválida.' });
    }

    const token = createToken({
      id: signIn.id,
      nome: signIn.nomeUsuario,
      permissao: signIn.permissao,
      email: signIn.emailUsuario,
    });

    await signIn.update({ token, ultimoLogin: Date.now() })

    signIn.token = token;

    const {
      id,
      nomeUsuario: nome,
      permissao,
      emailUsuario: email,
      token: updatedToken
    } = signIn;

    return res.status(200).json({
      id, nome, permissao, email, updatedToken
    });
  },
  async delete(req, res) {
    const { tokenId } = req;

    const usuario = await Usuario.findByIdAndUpdate(tokenId, { token: '' });

    await usuario.update({ token: '' });

    return res.status(200).json({ success: 'Deslogado com sucesso.' });
  },
};
