const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constant");

const jwtVerify = function (token) {
  return new Promise((resolove, reject) => {
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
      if (err) {
        reject(err);
      }
      resolove(decoded);
    });
  });
};
module.exports = {
  jwtVerify,
};
