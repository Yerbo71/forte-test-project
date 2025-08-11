import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  phone: Joi.string()
    .pattern(/^[0-9\s\-\+]+$/)
    .required(),
  email: Joi.string().email().allow("").optional(),
});

const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: "Validation Error",
      error: error.details[0].message,
    });
  }
  next();
};

export default validateContact;
