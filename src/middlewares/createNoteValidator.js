//Validation middleware

//import joi for validation
const Joi = require('joi');


//use joi to validate the request body
const validateCreateNote = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(30).required(),
    category: Joi.string().min(3).valid('work','school','personal','home','club').optional(),
    tags: Joi.array().items(Joi.string()).optional() 
   
  });
  const { error,value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};


module.exports = validateCreateNote;