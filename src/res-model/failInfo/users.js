// errno 1200x
module.exports = {
  // 登录校验失败
  loginCheckFailInfo: {
    errno: 12001,
    message: "登录校验失败",
  },
  // 发送短信校验码过于频繁
  sendVeriCodeFrequentlyFailInfo: {
    errno: 12002,
    message: "请勿频繁获取短信验证码",
  },
  // 发送短信验证码错误
  sendVeriCodeErrorFailInfo: {
    errno: 12003,
    message: "发送短信失败,请稍后尝试",
  },
};
