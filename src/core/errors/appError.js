class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.errorMessage = {
      errors: [{ code, message }],
    };
  }
}

module.exports = AppError;
