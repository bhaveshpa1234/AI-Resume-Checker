const ApiError = require("../utils/ApiError");

const validate = (schema,source = "body") => (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
        const errorMessages = result.error.errors.map((err) => err.message);
        return next(ApiError.badRequest(errorMessages.join(", ")));
    }
    req[source] = result.data;
    next();
}

module.exports = validate;