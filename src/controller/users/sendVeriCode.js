const {
  getVeriCodeFromCache,
  setVeriCodeToCache,
} = require("../../cache/users/veriCode");
const { isProd, isTest } = require("../../utils/env");
const { msgVeriCodeTimeout } = require("../../config/index");
const {
  SuccessRes,
  ErrorRes,
  sendVeriCodeErrorFailInfo,
} = require("../../res-model/index");
const { sendVeriCodeMsg } = require("../../vendor/sendMsg");
const {
  sendVeriCodeFrequentlyFailInfo,
} = require("../../res-model/failInfo/index");

/**
 * 发送短信验证码
 * @param {string} phoneNumber
 * @param {boolean} isRemoteTest
 */
async function sendVeriCode(phoneNumber, isRemoteTest = false) {
  // 先从缓存中获取验证码

  const codeFromCache = await getVeriCodeFromCache(phoneNumber);

  // 如果从缓存中获取到验证码
  if (codeFromCache) {
    if (!isProd) {
      // 非线上环境，直接返回
      return new SuccessRes({ code: codeFromCache });
    }
    return new ErrorRes(sendVeriCodeFrequentlyFailInfo);
  }

  // 缓存中没有则发送
  const veriCode = Math.random().toString().slice(-4);
  let sendSuccess = false;
  if (isTest) {
    // 本地接口测试
    sendSuccess = true;
  } else if (isRemoteTest) {
    //
    sendSuccess = true;
  } else {
    // 正式发短信
    try {
      // 短信提示的过期时间
      const msgTimeoutMin = (msgVeriCodeTimeout / 60).toString();
      console.log(msgVeriCodeTimeout);
      console.log(msgTimeoutMin);
      // 发送短信
      await sendVeriCodeMsg(phoneNumber, veriCode, msgTimeoutMin);
      sendSuccess = true;
    } catch (ex) {
      sendSuccess = false;
      console.error("发送短信验证码错误", ex);
      // 及时报警
    }
    if (!sendSuccess) {
      return new ErrorRes(sendVeriCodeErrorFailInfo);
    }
    // 发送短信成功,然后缓存 设置timeout
    setVeriCodeToCache(phoneNumber, veriCode, msgVeriCodeTimeout);
    // 返回成功信息
    const resData = isProd ? {} : { code: veriCode };
    return new SuccessRes(resData);
  }
  return false;
}
module.exports = sendVeriCode;
