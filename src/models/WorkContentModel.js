const mongoose = require("../db/mongoose");

const contentSchema = mongoose.Schema(
  {
    // 页面组件列表
    components: [Object],
    // 页面的属性 如页面背景图片
    props: Object,
    // 配置信息
    setting: Object,
  },
  { timestamps: true }
);

// 未发布的内容
const WorkContentModel = mongoose.model("workContent", contentSchema);
// 发布的内容
const WorkPublishContentModel = mongoose.model(
  "workPublishContent",
  contentSchema
);
module.exports = {
  WorkContentModel,
  WorkPublishContentModel,
};
