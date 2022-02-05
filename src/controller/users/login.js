/*
 * @Author: your name
 * @Date: 2022-02-06 01:55:50
 * @LastEditTime: 2022-02-06 03:15:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/controller/users/login.js
 */
const { WXManager } = require("../../service/wx");
const { ErrorRes, SuccessRes } = require("../../res-model/index");
const { loginCheckFailInfo } = require("../../res-model/failInfo/index");

async function loginWx(code) {
  try {
    const res = await WXManager.codeToToken(code);
    if (res.data.errcode === 0 || !res.data.errcode) {
      return new SuccessRes({
        ...res.data,
      });
    }
    return new ErrorRes({
      errno: res.data.errcode,
      message: res.data.errmsg,
    });
  } catch (err) {
    console.error("登录失败", err);
    return new ErrorRes(loginCheckFailInfo);
  }
}

module.exports = {
  loginWx,
};
