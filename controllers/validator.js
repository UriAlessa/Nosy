const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().trim().min(3).max(25).required().messages({
      'string.empty': 'Username field cant be empty',
      'string.min': 'Username must contain at least 3 characters',
      "string.max": 'Username cannot exceed 25 characters',
    }),
    password: joi.string().trim().min(8).required().messages({
      'string.empty': 'The field cant be empty',
      'string.base': 'The password must be of type text',
      'string.min': 'Password must contain at least 8 characters',
    }),
    email: joi.string().trim().email({ tlds: { allow: false } }).messages({
      'string.empty': 'Email cant be empty',
      'string.base': 'The email must be of type text',
      'string.email': 'The email is invalid',
    }),
    avatar: joi.string().required().uri().messages({
      'string.empty': 'The image field cant be empty',
      'string.base': 'The image must be of type text',
      'string.uri': 'The image field must contain a valid URL',
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
