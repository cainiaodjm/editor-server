const { getVeriCodeFromCache } = require("../../cache/users/veriCode");
const { ErrorRes, SuccessRes } = require("../../res-model/index");
const {
  loginVeriCodeIncorrectFailInfo,
  userFrozenFailInfo,
  createUserDbErrorFailInfo,
} = require("../../res-model/failInfo/index");
const { jwtSign } = require("../../utils/jwt");
const genPassword = require("../../utils/genPassword");
const doCrypto = require("../../utils/cryp");
const {
  findOneUserService,
  updateUserInfoService,
  createUserService,
} = require("../../service/users");

/**
 *
 * @param {*} phoneNumber
 * @param {*} veriCode
 */
async function loginByPhoneNumber(phoneNumber, veriCode) {
  const veriCodeFromCache = await getVeriCodeFromCache(phoneNumber);
  console.log(veriCodeFromCache, "=====");
  if (veriCode !== veriCodeFromCache) {
    return new ErrorRes(loginVeriCodeIncorrectFailInfo);
  }
  // 先查找，找到的就返回
  const userInfo = await findOneUserService({
    phoneNumber,
  });

  if (userInfo) {
    // 用户是否冻结
    if (userInfo.isFrozen) return new ErrorRes(userFrozenFailInfo);
    // 更新最后登录时间
    try {
      //
      await updateUserInfoService(userInfo.username, {
        latestLoginAt: new Date(),
      });
    } catch (ex) {
      //
      console.error("更新最后登录时间错误", ex);
    }
    return new SuccessRes({
      token: jwtSign(userInfo),
    });
  }
  // 查找不到 再创建
  let password = genPassword(); // 手机号注册，生成随机的密码
  password = doCrypto(password);
  try {
    //
    const newUser = await createUserService({
      username: phoneNumber,
      password,
      phoneNumber,
      nickName: `用户-${phoneNumber.slice(-4)}`,
      latestLoginAt: new Date(),
    });
    console.log(newUser);
    return new SuccessRes({ token: jwtSign(newUser) });
  } catch (ex) {
    console.error("创建用户失败", ex);
    return new ErrorRes(createUserDbErrorFailInfo);
  }
}

module.exports = loginByPhoneNumber;
