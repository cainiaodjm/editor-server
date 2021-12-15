/*
 * @Author: your name
 * @Date: 2021-10-07 23:21:53
 * @LastEditTime: 2021-12-15 11:48:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/app.js
 */
const Koa = require("koa");

const app = new Koa();
const views = require("koa-views");
const cors = require("koa2-cors");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const loginCheck = require("./middlewares/loginCheck");

const index = require("./routes/index");
const users = require("./routes/users");
const yuque = require("./routes/yuque");

// error handler
onerror(app);
// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(cors());
app.use(json());
app.use(logger());
app.use(require("koa-static")(`${__dirname}/public`));

app.use(
  views(`${__dirname}/views`, {
    extension: "ejs",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// app.use(loginCheck);
// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(yuque.routes(), yuque.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
