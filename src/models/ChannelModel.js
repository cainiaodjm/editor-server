const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../db/sequelize/seq");

const Channel = sequelize.define("channel", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "渠道名称",
  },
  workId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "作品ID",
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: "状态 0 删除 1 -正常",
  },
});
