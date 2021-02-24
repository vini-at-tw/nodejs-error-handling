const HttpStatus = require("http-status");
const errorCode = require("./errorCode");
const AppError = require("./appError");

class UserNotFoundError extends AppError {
  constructor(message) {
    super(message, errorCode.USER_NOT_FOUND);
    this.statusCode = HttpStatus.NOT_FOUND;
  }
}

module.exports = UserNotFoundError;
