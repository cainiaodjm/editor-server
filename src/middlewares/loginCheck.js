const { jwtVerify } = require("../utils/jwt");
const { ErrorRes } = require("../res-model/index");

/**
 * 登录校验
 * @param {Object} ctx
 * @param {function} next
 */
module.exports = async function loginCheck(ctx, next) {
  // 失败信息
  const errRes = new ErrorRes();
  // 获取token
  const token = ctx.header.authorization;
  if (!token) {
    ctx.body = errRes;
  }
  let flag = true;
  try {
    const userInfo = await jwtVerify(token);
    delete userInfo.password;
    // 验证成功
    ctx.userInfo = userInfo;
  } catch (ex) {
    flag = false;
    ctx.body = errRes;
  }
  if (flag) {
    next();
  }
};
