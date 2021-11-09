/**
 * 验证码缓存
 */
const { cacheSet, cacheGet } = require("../index");

// cache key 前缀，重要！！否则数据容易混乱
const PREFIX = "phoneVeriCode-";

/**
 * 根据手机号获取验证码缓存
 * @param {string} phoneNumber
 */
async function getVeriCodeFromCache(phoneNumber) {
  const key = `${PREFIX}${phoneNumber}`;
  const code = await cacheGet(key);
  if (code == null) return code;
  return code.toString(); // cacheGet 方法中有 JSON.parse
}

async function setVeriCodeToCache(phoneNumber, veriCode, timeout) {
  const key = `${PREFIX}${phoneNumber}`;
  cacheSet(key, veriCode, timeout);
}

module.exports = {
  getVeriCodeFromCache,
  setVeriCodeToCache,
};
