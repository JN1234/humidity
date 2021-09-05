//Validation helper funcs
const Joi = require("joi");
exports.infoValidation = (data) => {
  const schema = Joi.object({
    humidity: Joi.string().required(),

    temperature: Joi.string().required(),
  });
  return schema.validate(data);
};
