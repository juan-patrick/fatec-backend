module.exports = {
  permSup(req, res, next) {
    const { tokenPerm } = req;

    if (tokenPerm < 2) {
      return res.status(406).json({
        error: 'Sem permissão para acessar aplicação.',
      });
    }

    return next();
  },

  permAdm(req, res, next) {
    const { tokenPerm } = req;

    if (tokenPerm < 3) {
      return res.status(406).json({
        error: 'Sem permissão para acessar aplicação.',
      });
    }

    return next();
  },
};
