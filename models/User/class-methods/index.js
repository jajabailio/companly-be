const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const classMethods = {};

classMethods.validateCreate = req => {
  const schema = Joi.object().keys({
    firstName: Joi.string().required().messages({
        'string.base': `"First name" should be a type of 'text'`,
        'string.empty': `"First name" is not allowed to be ampty`,
        'any.required': `"First name" is required`
      }),
    lastName: Joi.string().required().messages({
      'string.base': `"Last name" should be a type of 'text'`,
      'string.empty': `"Last name" is not allowed to be ampty`,
      'any.required': `"Last name" is required`
    }),
    email: Joi.string().email().required(),
    role: Joi.string().valid('Owner', 'Admin', 'Support', 'Tech').required(),
    Company_id: Joi.objectId().required(),
  });

  return schema.validate(req)
}

classMethods.validateUpdate = req => {
  const schema = Joi.object().keys({
    firstName: Joi.string().messages({
        'string.base': `"First name" should be a type of 'text'`,
        'string.empty': `"First name" is not allowed to be ampty`,
      }),
    lastName: Joi.string().messages({
      'string.base': `"Last name" should be a type of 'text'`,
      'string.empty': `"Last name" is not allowed to be ampty`,
    }),
    email: Joi.string().email(),
    role: Joi.string().valid('Owner', 'Admin', 'Support', 'Tech')
  });

  return schema.validate(req)
}

module.exports = classMethods;