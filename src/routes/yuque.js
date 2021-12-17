/*
 * @Author: your name
 * @Date: 2021-11-17 10:02:12
 * @LastEditTime: 2021-12-17 17:40:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/routes/yuque.js
 */
const router = require("koa-router")();
const sendMsg = require("../controller/yuque/sendMsg");
const { getToc, getDoc, getDocList } = require("../controller/yuque/yuque");
const { SuccessRes, ErrorRes } = require("../res-model/index");
const { validateFailInfo } = require("../res-model/failInfo/index");

const BasiYuQueAPI = "https://www.yuque.com/api/v2";
router.prefix("/api/yuque");
// 测试访问语雀
router.get("/test/hello", async function (ctx, next) {
  const res = await sendMsg("hello");
  ctx.body = res;
});
// 获取个人文档目录

router.get("/toc", async function (ctx, next) {
  // 获取namespace 先写死
  const namespace = "dingjiaming/bmdgr6";
  const res = await getToc(namespace);
  ctx.body = res;
});
router.get("/doc/:slug", async function (ctx, next) {
  console.log(ctx);
  const { slug } = ctx.params;
  if (!slug) {
    ctx.body = new ErrorRes(validateFailInfo);
  }
  const namespace = "dingjiaming/bmdgr6";
  const res = await getDoc(namespace, slug);
  ctx.body = res;
});

router.get("/docs", async function (ctx, next) {
  const namespace = "dingjiaming/bmdgr6";
  const res = await getDocList(namespace);
  ctx.body = res;
});

module.exports = router;
