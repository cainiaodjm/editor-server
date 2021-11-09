// 手机号规则
const phoneNumberRule = {
  type: "string",
  pattern: "^1[34578]\\d{9}$", // 手机号正则
};

// 手机号schema
const phoneNumberSchema = {
  type: "object",
  required: ["phoneNumber"],
  properties: {
    phoneNumber: phoneNumberRule,
    isRemoteTest: {
      type: "boolean",
    },
  },
};
const phoneNumberVeriCodeSchema = {
  type: "object",
  required: ["phoneNumber", "veriCode"],
  properties: {
    phoneNumber: phoneNumberRule,
    veriCode: {
      type: "string",
      pattern: "^\\d{4}$", // 四位数字
    },
  },
};

module.exports = {
  phoneNumberSchema,
  phoneNumberVeriCodeSchema,
};
