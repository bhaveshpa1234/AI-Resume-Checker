class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message) {
    return new ApiError(message, 400);
  }
  static unauthorized(message) {
    return new ApiError(message, 401);
  }
  static forbidden(message) {
    return new ApiError(message, 403);
  }
  static notFound(message) {
    return new ApiError(message, 404);
  }
  static conflict(message) {
    return new ApiError(message, 409);
  }
  static tooMany(message) {
    return new ApiError(message, 429);
  }
  static internal(message) {
    return new ApiError(message, 500);
  }
}

module.exports = ApiError;
