const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constant");
const { jwtExpiresIn } = require("../config/index");

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
function jwtSign(data) {
  const token = jwt.sign(data, JWT_SECRET, { expiresIn: jwtExpiresIn });
  return token;
}
module.exports = {
  jwtVerify,
  jwtSign,
};
