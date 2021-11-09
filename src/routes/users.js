const router = require("koa-router")();
const { SuccessRes } = require("../res-model/index");
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

module.exports = router;
