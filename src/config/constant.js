/**
 * 常量配置
 */

module.exports = {
  // 密码加密 密钥
  PASSWORD_SECRET: "CAINIAODJM_1994#",

  // JWT密钥
  JWT_SECRET: "secret_for-josn#web$token",

  // jwt 可忽略的path
  JWT_IGNORE_PATH: [/\//],
  // 查询列表 默认分页配置
  DEFAULT_PAGE_SIZE: 8,
};
