const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const classMethods = {};

classMethods.validateCreate = req => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string().required(),
    ownedBy: Joi.string().required().messages({
      'string.base': `"Owner" should be a type of 'text'`,
      'string.empty': `"Owner" is not allowed to be empty`,
      'any.required': `"Owner" is required`
    })
    // User_id: Joi.objectId().required(),
  });

  return schema.validate(req)
}

classMethods.validateUpdate = req => {
  const schema = Joi.object().keys({
    name: Joi.string(),
    address: Joi.string(),
    ownedBy: Joi.string().messages({
      'string.base': `"Owner" should be a type of 'text'`,
      'string.empty': `"Owner" is not allowed to be empty`,
    })
    // User_id: Joi.objectId().required(),
  });

  return schema.validate(req)
}

module.exports = classMethods;