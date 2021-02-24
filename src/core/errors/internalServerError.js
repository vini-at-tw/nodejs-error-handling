const HttpStatus = require("http-status");
const AppError = require("./appError");
const errorCode = require("./errorCode");

class InternalServerError extends AppError {
  constructor(message) {
    super(message, errorCode.INTERNAL_SERVER_ERROR);
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

module.exports = InternalServerError;
