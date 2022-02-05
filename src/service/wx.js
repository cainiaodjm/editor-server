/*
 * @Author: your name
 * @Date: 2022-02-05 23:59:53
 * @LastEditTime: 2022-02-06 01:53:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/service/wx.js
 */
const util = require("util");
const axios = require("axios");
const { wxConfig } = require("../config");

class WXManager {
  static async codeToToken(code) {
    const url = util.format(
      wxConfig.wxLoginUrl,
      wxConfig.wxAppId,
      wxConfig.wxSecret,
      code
    );
    const result = await axios.get(url);
    return result;
  }
}
module.exports = {
  WXManager,
};
