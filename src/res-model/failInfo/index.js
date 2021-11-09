const validateInfos = require("./validate");
const usersInfos = require("./users");
// 错误信息集合导出
module.exports = {
  ...validateInfos,
  ...usersInfos,
};
