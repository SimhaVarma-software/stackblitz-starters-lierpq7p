const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-very-secure-secret'; // In production, use env variables

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

const decrypt = (token) => {
  // return decoded payload
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null; // or handle error as needed
  }
}

module.exports = {
  encrypt,
  decrypt
}
