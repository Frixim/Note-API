//Validation middleware

//import joi for validation
const Joi = require('joi');


//use joi to validate the request body
const createNoteValidator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(30).required(),
    category: Joi.string().optional().valid('work','school','personal','home','club'),
    tags: Joi.array().items(Joi.string()).min(1).optional()        
   
  });
  const { error} = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

//use joi to validate the request body
const updateNoteValidator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(5),
    content: Joi.string().min(30),
    category: Joi.string().valid('work','school','personal','home','club').optional(),
    tags: Joi.array().items(Joi.string()) 
   
  }).min(1);

  const { error} = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};


module.exports = {
  createNoteValidator,
  updateNoteValidator,
};

