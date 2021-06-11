const { sign } = require('jsonwebtoken');

const createToken = (params = {}) => {
  const expiresSet = new Date(Date.now());
  expiresSet.setMinutes(expiresSet.getMinutes() + 30);

  return sign(
    { ...params, expiresIn: parseInt(expiresSet.getTime(), 10) },
    process.env.SECRET_JWT
  );
};

module.exports = { createToken };