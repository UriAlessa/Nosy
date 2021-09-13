const joi = require("joi");

const validatorReview = (req, res, next) => {
  const schema = joi.object({
    img: joi.string(),
    title: joi.string().pattern(new RegExp('[a-z, A-Z]')).messages({
    }),
    description: joi.string().pattern(new RegExp('[a-z, A-Z]')).messages({
    }),
  }
  );
  const validationReview = schema.validate(req.body, { abortEarly: false });
  if (!validationReview.error) {
    next();
  } 
    
};
module.exports = validatorReview;
