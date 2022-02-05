/*
 * @Author: your name
 * @Date: 2021-10-07 23:21:53
 * @LastEditTime: 2022-02-06 01:12:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/config/envs/dev.js
 */
const dotenv = require("dotenv");
const path = require("path");

const envName = process.env.NODE_ENV || "dev";
const envPath = path.resolve(__dirname, `../../../.env.${envName}`);
const result = dotenv.config({ path: envPath });
let config = null;
if (result.error) {
  config = {};
} else {
  config = result.parsed;
}

module.exports = {
  mysqlConfig: {
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
  },
  mongodbConf: {
    host: config.MONGODB_HOST,
    port: config.MONGODB_PORT,
    dbName: config.MONGODB_DATABASE,
  },
  redisConfig: {
    port: config.REDIS_PORT,
    host: config.REDIS_HOST,
  },
  wxConfig: {
    wxSecret: config.WX_SERECT,
    wxAppId: config.WX_APPID,
    wxLoginUrl: config.WX_LOGIN_URL,
  },
};
