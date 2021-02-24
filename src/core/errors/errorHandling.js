const UserNotFoundError = require("./userNotFoundError");
const InternalServerError = require("./internalServerError");

function errorHandling(error, req, res, next) {
  if (error instanceof UserNotFoundError) {
    console.log("Error to get user by id", error.errorMessage);
    res.status(error.statusCode).json(error.errorMessage);
  } else {
    const internalError = new InternalServerError("Oops something went wrong.");
    console.log(error.message, internalError.errorMessage);
    res.status(internalError.statusCode).json(internalError.errorMessage);
  }
}

module.exports = errorHandling;
