/**
 * 处理校验中间件
 */
const Ajv = require("ajv");
const { ErrorRes } = require("../res-model/index");
const { validateFailInfo } = require("../res-model/failInfo/index");

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

function genValidator(schema) {
  async function validator(ctx, next) {
    const data = ctx.request.body;
    const validateError = validate(schema, data);
    if (validateError) {
      ctx.body = new ErrorRes({
        ...validateFailInfo, // 其中有 errno 和 message
        data: validateError,
      });
      return;
    }
    // 校验成功 继续
    await next();
  }
  return validator;
}

module.exports = genValidator;
