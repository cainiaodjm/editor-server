/*
 * @Author: your name
 * @Date: 2021-10-07 23:21:53
 * @LastEditTime: 2022-02-07 03:45:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/models/UserModel.js
 */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize/seq");

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: "username",
    comment: "用户名,唯一",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "密码",
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: "phoneNumber",
    comment: "用户手机号,唯一",
  },
  openId: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: "openId",
    comment: "对应用户的微信OpenId",
  },
  nickName: {
    type: DataTypes.STRING,
    comment: "昵称",
  },
  gender: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    comment: "性别(1 男 2 女 0 保密)",
  },
  avatar: {
    type: DataTypes.STRING,
    comment: "头像，图片地址",
  },
  city: {
    type: DataTypes.STRING,
    comment: "城市",
  },
  latestLoginAt: {
    type: DataTypes.DATE,
    defaultValue: null,
    comment: "最后登录时间",
  },
  isFrozen: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: "用户是否被冻结",
  },
});
module.exports = User;
