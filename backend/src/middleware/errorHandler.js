const env = require("../config/env");
const ApiError = require("../utils/ApiError");

function notFound(req, res, next) {
    next(ApiError.notFound(`Not Found - ${req.originalUrl}`));
}

function errorHandler(err, req, res, next) {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    let details = err.details || null;

    if (err.name === "ValidationError") {
        statusCode = 400;
        message = "Validation Error";
        details = Object.values(err.errors).map((e) => e.message);
    }
    else if (err.name === "CastError" && err.kind === "ObjectId") {
        statusCode = 400;
        message = "Invalid ID format";
    }
    else if (err.code === 11000) {
        statusCode = 409;
        message = "Duplicate key error";
        details = Object.keys(err.keyValue).map((key) => `${key}: ${err.keyValue[key]}`);
    }
    else if (err.name === "ZodError") {
        statusCode = 400;
        message = "Validation Error";
        details = err.errors.map((e) => e.message);
    }

    if (statusCode >= 500) {
        console.error(err);
    }

    res.status(statusCode).json({
        success: false,
        message,

        details,
        stack: env.nodeEnv === "development" ? err.stack : undefined,
    });
}

module.exports = { notFound, errorHandler };