/*
 * @Author: your name
 * @Date: 2021-11-17 10:29:50
 * @LastEditTime: 2021-11-19 14:05:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/controller/yuque/sendMsg.js
 */
const HttpRequest = require("../../utils/axois");
const { ErrorRes, SuccessRes } = require("../../res-model/index");
// 访问语雀API
const { YuQueToken } = require("../../config/index");
const yuQueAxios = require("./yuQueAxios");

async function sendMsg(msg) {
  const axios = new HttpRequest({
    baseURL: "https://www.yuque.com/api/v2",
    headers: {
      "X-Auth-Token": YuQueToken,
    },
  });
  try {
    const res = await axios.request({
      url: `/${msg}`,
      method: "get",
    });
    const { data } = res;

    return new SuccessRes(data);
  } catch (error) {
    //
    return new ErrorRes(error);
  }
}
module.exports = sendMsg;
