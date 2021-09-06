const joi = require("joi");
const validator = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().min(6).required().message({
      "string.empty": "Password field must be completed",
      "string.min": "Password must be at least 6 characters long",
    }),
    password: joi.string().min(8).required().messages({
      "string.empty": "Password field must be completed",
      "string.min": "Password must be at least 8 characters long",
    }),
    email: joi.string().trim().required().email().messages({
      "string.empty": "Email field must be completed",
      "string.email": "Email must be a valid email",
    }),
    avatar: joi.string().required().messages({
      "string.empty": "Image field must be completed",
    }),
    facebook: joi.boolean().default(false),
    google: joi.boolean().default(false),
  }
  );
  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    res.json({
      error: validation.error.details.map((error) => {
        return { field: error.context.key, message: error.message };
      }),
    });
  }
};
module.exports = validator;
