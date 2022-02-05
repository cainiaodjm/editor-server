/*
 * @Author: your name
 * @Date: 2021-10-07 23:21:53
 * @LastEditTime: 2022-02-06 01:08:59
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/config/index.js
 */
const config = require("./envs/dev");

module.exports = {
  mysqlConfig: config.mysqlConfig,
  mongodbConf: config.mongodbConf,
  redisConfig: config.redisConfig,
  wxConfig: config.wxConfig,
  // 短信验证码缓存时间，单位 s
  msgVeriCodeTimeout: 2 * 60,
  // jwt 过期时间
  jwtExpiresIn: "1d",
  // 语雀的token
  YuQueToken: "1zYRQlozd1gHmPu5ByEajRhMMlSZZ0Skf4ZOvHqY",
};
