const Joi = require('joi');

const unitValidationSchema = Joi.object({
  name: Joi.string().trim().required(),

  into_base: Joi.number()
    .positive()
    .min(1)
    .required()
    .messages({
      'number.base': '"into_base" must be a number',
      'number.positive': '"into_base" must be positive',
      'any.required': '"into_base" is required',
    }),

  base_unit: Joi.string()
    .length(24) // MongoDB ObjectId length
    .hex()
    .allow(null, ''),

  type: Joi.string()
    .valid('weight', 'volume', 'count')
    .required(),

  symbol: Joi.string().trim().required(),

  is_active: Joi.boolean().optional(),

  description: Joi.string().trim().allow(null, ''),

  // These fields should not be required while creating
  _id: Joi.string().length(24).hex().optional(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
  __v: Joi.number().optional()
});

module.exports = { unitValidationSchema };
