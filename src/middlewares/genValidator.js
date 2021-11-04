/**
 * 处理校验中间件
 */
const Ajv = require("ajv");
const { ErrorRes } = require("../res-model/index");

const ajv = new Ajv({
  allErrors: true,
});

/**
 * json schema 校验
 * @param {Object} schema json schema 规则
 * @param {Object} data 待校验的数据
 * @returns
 */
function validate(schema, data = {}) {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    return ajv.errors;
  }

  return undefined;
}
