// eslint-disable-next-line import/no-unresolved
import { sign } from 'jsonwebtoken';

const createToken = (params = {}) => {
  const expiresSet = new Date(Date.now());
  expiresSet.setMinutes(expiresSet.getMinutes() + 30);

  return sign(
    { ...params, expiresIn: parseInt(expiresSet.getTime(), 10) },
    process.env.SECRET_JWT
  );
};

export default { createToken };