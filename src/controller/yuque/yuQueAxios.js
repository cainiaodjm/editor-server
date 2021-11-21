/*
 * @Author: your name
 * @Date: 2021-11-19 12:09:37
 * @LastEditTime: 2021-11-21 18:43:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/controller/yuque/axios.js
 */
const HttpRequest = require("../../utils/axois");
const { YuQueToken } = require("../../config/index");

const axios = new HttpRequest({
  baseURL: "https://www.yuque.com/api/v2",
  headers: {
    "X-Auth-Token": YuQueToken,
  },
});
module.exports = axios;
