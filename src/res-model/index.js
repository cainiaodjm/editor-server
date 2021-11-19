/*
 * @Author: your name
 * @Date: 2021-11-04 15:47:11
 * @LastEditTime: 2021-11-19 11:45:08
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /editor-server/src/res-model/index.js
 */
// eslint-disable-next-line max-classes-per-file
class BaseRes {
  constructor({ errno, data, message }) {
    this.errno = errno;
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}
class ErrorRes extends BaseRes {
  constructor({ errno = -1, message = "", data }, addMessage = "") {
    super({
      errno,
      message: addMessage
        ? `${message} - ${addMessage}` // 有追加信息
        : message,
      data,
    });
  }
}

class SuccessRes extends BaseRes {
  constructor(data = {}) {
    console.log(data);
    super({
      errno: 0,
      data,
    });
  }
}
module.exports = {
  ErrorRes,
  SuccessRes,
};
