/*
 * @Author: your name
 * @Date: 2021-11-09 16:45:51
 * @LastEditTime: 2022-02-06 22:02:45
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/service/users.js
 */
const _ = require("lodash");
const UserModel = require("../models/UserModel");
/**
 *
 * @param {Object} param0
 */
async function findOneUserService({ username, password, phoneNumber, openId }) {
  const whereOpt = {};
  if (username) {
    Object.assign(whereOpt, { username });
  }
  if (password) {
    Object.assign(whereOpt, { username, password });
  }
  if (phoneNumber) {
    Object.assign(whereOpt, { phoneNumber });
  }
  if (openId) {
    Object.assign(whereOpt, { openId });
  }
  if (_.isEmpty(whereOpt)) return null;
  // 查询
  const result = await UserModel.findOne({
    where: whereOpt,
  });
  if (result == null) {
    // 未查到用户
    return result;
  }
  // 返回查询结果
  return result.dataValues;
}
async function updateUserInfoService(username, data = {}) {
  if (!username) return false;
  if (_.isEmpty(data)) return false;
  const result = await UserModel.update(data, {
    where: {
      username,
    },
  });

  return result[0] !== 0;
}
async function createUserService(data = {}) {
  const result = await UserModel.create(data);
  return result.dataValues;
}
module.exports = {
  findOneUserService,
  updateUserInfoService,
  createUserService,
};
