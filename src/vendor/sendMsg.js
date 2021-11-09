async function sendVeriCodeMsg(phoneNumber, code, timeout = "") {
  if (!phoneNumber || !code)
    return Promise.reject(new Error("手机号或验证码为空"));
  return Promise.resolve("ok"); // 模拟一个异步
  //   if (!phoneNumber || !code)
  //     return Promise.reject(new Error("手机号或验证码为空"));
  //   const req = genSmsRequest("741051");
  //   req.PhoneNumberSet = [`+86${phoneNumber}`]; // 手机号，可群发
  //   req.TemplateParamSet = [code, timeout]; // 为模板内容注入参数
  //   return new Promise((resolve, reject) => {
  //     // 发送短信
  //     client.SendSms(req, (err, res) => {
  //       if (err) {
  //         // 失败
  //         reject(err);
  //         return;
  //       }
  //       // 成功
  //       resolve(res);
  //     });
  //   });
}
module.exports = {
  sendVeriCodeMsg,
};
