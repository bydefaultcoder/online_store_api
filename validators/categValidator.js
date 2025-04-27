// validators/categoryValidator.js
const Joi = require('joi');

exports.categoryValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .messages({
      'string.base': `"name" should be a type of 'text'`,
      'string.empty': `"name" cannot be an empty field`,
      'any.required': `"name" is a required field`
    }),

  image: Joi.string()
    .uri()
    .required()
    .messages({
      'string.base': `"image" should be a type of 'text'`,
      'string.empty': `"image" cannot be an empty field`,
      'string.uri': `"image" must be a valid URL`,
      'any.required': `"image" is a required field`
    }),
});
