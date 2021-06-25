const { verify } = require('jsonwebtoken');
const { promisify } = require('util');

module.exports.Auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Não autorizado.' });
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = await promisify(verify)(token, process.env.SECRET_JWT);

    if (decoded.expiresIn < Date.now()) {
      return res.status(401).json({ error: 'Sessão inválida.' });
    }

    req.tokenId = decoded.id;
    req.tokenNome = decoded.nome;
    req.tokenEmail = decoded.email;
    req.tokenPerm = decoded.permissao;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Não autorizado.' });
  }
};