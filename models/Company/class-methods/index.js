const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const classMethods = {};

classMethods.validateCreate = req => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string().required(),
  });

  return schema.validate(req)
}

classMethods.validateUpdate = req => {
  const schema = Joi.object().keys({
    name: Joi.string(),
    address: Joi.string(),
  });

  return schema.validate(req)
}

module.exports = classMethods;