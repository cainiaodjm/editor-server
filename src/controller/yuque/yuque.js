/*
 * @Author: your name
 * @Date: 2021-11-19 12:00:04
 * @LastEditTime: 2021-12-17 17:29:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/controller/yuque/getToc.js
 */
const yuQueAxios = require("./yuQueAxios");
const { ErrorRes, SuccessRes } = require("../../res-model/index");
/**
 * @description:
 * @param {*} namespace
 * @return {*}
 */
async function getToc(namespace) {
  try {
    const res = await yuQueAxios.request({
      method: "get",
      url: `/repos/${namespace}/toc`,
    });

    return new SuccessRes(res.data);
  } catch (error) {
    //
    return new ErrorRes(error);
  }
}
async function getDoc(namespace, slug) {
  try {
    const res = await yuQueAxios.request({
      method: "get",
      url: `/repos/${namespace}/docs/${slug}`,
    });

    return new SuccessRes(res.data);
  } catch (error) {
    //
    return new ErrorRes(error);
  }
}

async function getDocList(namespace) {
  try {
    const res = await yuQueAxios.request({
      method: "get",
      url: `/repos/${namespace}/docs`,
    });
    return new SuccessRes(res.data);
  } catch (error) {
    return new ErrorRes(error);
  }
}

module.exports = {
  getToc,
  getDoc,
  getDocList,
};
