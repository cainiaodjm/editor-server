/*
 * @Author: your name
 * @Date: 2021-10-07 23:21:53
 * @LastEditTime: 2022-02-07 04:27:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/routes/users.js
 */
const router = require("koa-router")();
const { SuccessRes } = require("../res-model/index");
const { loginWx } = require("../controller/users/login");
const loginCheck = require("../middlewares/loginCheck");
const genValidator = require("../middlewares/genValidator");
const {
  phoneNumberSchema,
  phoneNumberVeriCodeSchema,
} = require("../validator/user");
const sendVeriCode = require("../controller/users/sendVeriCode");
const loginByPhoneNumber = require("../controller/users/loginByPhoneNumber");
// 路由前缀
router.prefix("/api/users");

// 生成短信验证码
router.post(
  "/genVeriCode",
  genValidator(phoneNumberSchema),
  async (ctx, next) => {
    const { phoneNumber, isRemoteTest } = ctx.request.body;

    // 尝试发送验证码
    const res = await sendVeriCode(phoneNumber, isRemoteTest);
    ctx.body = res;
  }
);
// 使用手机号登录
router.post(
  "/loginByPhoneNumber",
  genValidator(phoneNumberVeriCodeSchema),
  async function (ctx, next) {
    const { phoneNumber, veriCode } = ctx.request.body;
    const res = await loginByPhoneNumber(phoneNumber, veriCode);
    ctx.body = res;
  }
);
// 获取用户信息
router.post("/getUserInfo", function (ctx, next) {});
// 修改用户信息
router.post("/updateUserInfo", function (ctx, next) {});
// 微信登录
router.post("/loginByWx", async function (ctx, next) {
  const { code, userProfile } = ctx.request.body;
  console.log(code);
  const res = await loginWx(code, userProfile);
  ctx.body = res;
});

module.exports = router;
