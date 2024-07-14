import Joi from "joi";

const customMessages = {
  name: {
    "string.base": "İsim Alanı Metin Olmalıdır!",
    "string.empty": "İsim Alanı Boş Geçilemez!",
    "string.min": "İsim Alanı En Az 3 Karakter Olmalıdır!",
    "string.max": "İsim Alanı En Fazla 20 Karakter Olmalıdır!",
    "any.required": "İsim Alanı Boş Geçilemez!",
  },
  email: {
    "string.base": "Email Alanı Metin Olmalıdır!",
    "string.email": "Lütfen Geçerli Bir Email Giriniz!",
    "string.empty": "Email Alanı Boş Geçilemez!",
    "string.min": "Email Alanı En Az 5 Karakter Olmalıdır!",
    "string.max": "Email Alanı En Fazla 50 Karakter Olmalıdır!",
    "any.required": "Email Alanı Boş Geçilemez!",
  },
  password: {
    "string.base": "Şifre Alanı Metin Olmalıdır!",
    "string.empty": "Şifre Alanı Boş Geçilemez!",
    "string.min": "Şifre Alanı En Az 6 Karakter Olmalıdır!",
    "string.max": "Şifre Alanı En Fazla 36 Karakter Olmalıdır!",
    "any.required": "Şifre Alanı Boş Geçilemez!",
  },
  password_confirmation: {
    "any.only": "Şifreler Eşleşmiyor!",
    "any.required": "Şifre Eşleştirme Alanı Boş Geçilemez!",
  },
  otp: {
    "string.base": "OTP Alanı Metin Olmalıdır!",
    "string.empty": "OTP Alanı Boş Geçilemez!",
    "string.length": "OTP Alanı 4 Karakter Olmalıdır!",
    "any.required": "OTP Alanı Boş Geçilemez!",
  },
};

const schemas = {
  register: Joi.object({
    name: Joi.string().min(3).max(20).required().messages(customMessages.name),
    email: Joi.string().email().min(5).max(50).required().messages(customMessages.email),
    password: Joi.string().trim().min(6).max(36).required().messages(customMessages.password),
    phone: Joi.string().optional().allow(''),
    password_confirmation: Joi.string().valid(Joi.ref("password")).required().messages(customMessages.password_confirmation),
  }),
  verifyEmail: Joi.object({
    email: Joi.string().email().min(5).max(50).required().messages(customMessages.email),
    otp: Joi.string().required().length(4).messages(customMessages.otp),
  }),
  login: Joi.object({
    email: Joi.string().email().min(5).max(50).required().messages(customMessages.email),
    password: Joi.string().trim().min(6).max(36).required().messages(customMessages.password),
  }),
  changePassword: Joi.object({
    password: Joi.string().trim().min(6).max(36).required().messages(customMessages.password),
    password_confirmation: Joi.string().valid(Joi.ref("password")).required().messages(customMessages.password_confirmation),
  }),
  emailPasswordLink: Joi.object({
    email: Joi.string().email().min(5).max(50).required().messages(customMessages.email),
  })
};

const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errorMessage = error.details.map((detail) => detail.message);
    return res.status(400).json({status:"failed", message: errorMessage });
  }
};

class authValidation {
  static register = validateRequest(schemas.register);
  static login = validateRequest(schemas.login);
  static verifyEmail = validateRequest(schemas.verifyEmail);
  static changePassword = validateRequest(schemas.changePassword);
  static emailPasswordLink = validateRequest(schemas.emailPasswordLink);
}

export default authValidation;
