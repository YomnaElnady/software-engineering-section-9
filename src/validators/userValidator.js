import Joi from "joi";

export const validateStudent = (student) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    grade: Joi.number().max(5).min(0),
    gpa: Joi.number().min(0).max(4),
    phoneNumber: Joi.number()
      .integer()
      .min(11 ** 9)
      .max(11 ** 11 - 1)
      .required()
      .messages({
        "number.min": "Mobile number should be 11 digit.",
        "number.max": "Mobile number should be 11 digit",
      }),
    nationalId: Joi.number().length(14).required(),
    birthDate: Joi.date().required(),
    role: Joi.string().enum(["Student", "Admin"]).required().default("Student"),
  });
  return schema.validate(student);
};
