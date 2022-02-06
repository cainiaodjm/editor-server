/*
 * @Author: your name
 * @Date: 2022-02-05 23:59:53
 * @LastEditTime: 2022-02-07 03:58:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/service/wx.js
 */
const util = require("util");
const axios = require("axios");
const { wxConfig } = require("../config");
const { findOneUserService, createUserService } = require("./users");
const { jwtSign } = require("../utils/jwt");

class WXManager {
  static async codeToToken(code, wxProfile) {
    const url = util.format(
      wxConfig.wxLoginUrl,
      wxConfig.wxAppId,
      wxConfig.wxSecret,
      code
    );
    const result = await axios.get(url);
    if (result.status !== 200) {
      // throw new global.errs.AuthFailed('openid获取失败')
      throw new Error("openid获取失败");
    }
    const { errcode, errmsg, openid } = result.data;

    if (errcode) {
      throw new Error(`openid获取失败:${errmsg}`);
    }
    let userInfo = await findOneUserService({
      openId: openid,
    });
    if (!userInfo) {
      // 创建用户
      userInfo = await createUserService({
        nickName: wxProfile.nickName,
        openId: openid,
        gender: wxProfile.gender,
        avatar: wxProfile.avatarUrl,
        latestLoginAt: new Date(),
      });
    }
    // 根据用户信息创建token

    return jwtSign(userInfo);

    // return result;
  }
}
module.exports = {
  WXManager,
};
