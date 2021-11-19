const config = require("./envs/dev");

module.exports = {
  mysqlConfig: config.mysqlConfig,
  mongodbConf: config.mongodbConf,
  redisConfig: config.redisConfig,
  // 短信验证码缓存时间，单位 s
  msgVeriCodeTimeout: 2 * 60,
  // jwt 过期时间
  jwtExpiresIn: "1d",
  // 语雀的token
  YuQueToken: "1zYRQlozd1gHmPu5ByEajRhMMlSZZ0Skf4ZOvHqY",
};
