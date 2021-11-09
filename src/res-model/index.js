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
