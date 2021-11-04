const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../db/sequelize/seq");
const mongoose = require("../db/mongoose");
const UserModel = require("./UserModel");

const WorkSchema = mongoose.Schema(
  {
    title: String, // String is shorthand for {type: String}
    components: [Object],
    props: Object,
    setting: Object,
  },
  { timestamps: true }
);

const WorkModel = mongoose.model("work", WorkSchema);
const Work = sequelize.define("work", {
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: "uuid",
    comment: "uuid,h5 url 中使用,隐藏真正的ID,避免被爬虫",
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "标题",
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "副标题",
  },
  contentId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: "contentId",
    comment: "发布内容id ,内容存储在mongobd中,未发布的为空",
  },
  publishContentId: {
    type: DataTypes.STRING,
    unique: "publishContentId",
    comment: "发布内容id ,内容存储在mongobd中,未发布的为空",
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "作者username",
  },
  coverImg: {
    type: DataTypes.STRING,
    comment: "封面图片 url",
  },
  isTemplate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: "是否是模板",
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: "状态 0-删除 1-未发布 ,2 发布 3- 强制下线",
  },
  copiedCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: "复制次数",
  },
  latestPublishAt: {
    type: DataTypes.DATE,
    defaultValue: null,
    comment: "最后一次发布时间",
  },
  isHot: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: "hot 标签,模板使用",
  },
  isNew: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: "new 标签,模板使用",
  },
  orderIndex: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: "排序参数",
  },
  isPublic: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: "是否公开显示",
  },
});
Work.belongsTo(UserModel, {
  foreignKey: "author",
  targetKey: "username",
});
module.exports = {
  WorkModel,
  Work,
};
