const config = require("./envs/dev");

module.exports = {
  mysqlConfig: config.mysqlConfig,
  mongodbConf: config.mongodbConf,
  redisConfig: config.redisConfig,
  // 短信验证码缓存时间，单位 s
  msgVeriCodeTimeout: 2 * 60,
};
