import Joi from 'joi';
// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation(['common', 'registerPage']);

export const joiRequired = (required = 'common:form.validations.required') =>
  Joi.string().required().messages({
    'string.empty': required,
    'any.required': required,
  });

export const joiUsername = (
  required = 'common:form.validations.usernameRequired',
) =>
  Joi.string().required().messages({
    'string.empty': required,
  });

export const joiName = (
  required = 'common:form.validations.nameRequired',
  noNumbers = 'common:form.validations.nameNoNumbers',
) =>
  Joi.string()
    .required()
    .regex(/^([^0-9]*)$/)
    .messages({
      'string.pattern.base': noNumbers,
      'string.empty': required,
    });

export const joiSurname = (
  required = 'common:form.validations.surnameRequired',
  noNumbers = 'common:form.validations.surnameNoNumbers',
) =>
  Joi.string()
    .required()
    .regex(/^([^0-9]*)$/)
    .messages({
      'string.pattern.base': noNumbers,
      'string.empty': required,
    });

export const joiEmail = (
  required = 'common:form.validations.emailRequired',
  email = 'common:form.validations.email',
) =>
  Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': required,
      'string.email': email,
    });

export const joiPassword = (
  required = 'common:form.validations.passwordRequired',
  min = 'common:form.validations.passwordMinLength',
) =>
  Joi.string().min(6).required().messages({
    'string.empty': required,
    'string.min': min,
  });

export const joiConfirmPassword = (
  required = 'common:form.validations.passwordConfirmRequired',
  match = 'common:form.validations.passwordMatch',
) =>
  Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .options({
      messages: {
        'string.empty': required,
        'any.only': match,
      },
    });

export const joiAvatar = (
  required = 'common:form.validations.avatarRequired',
) =>
  Joi.string()
    .required()
    .regex(/^([^0-9]*)$/)
    .messages({
      'string.empty': required,
    });

export const joiAge = (
  required = 'common:form.validations.ageRequired',
  numberPositive = 'common:form.validations.numberPositive',
  numberInteger = 'common:form.validations.numberInteger',
) =>
  Joi.number().integer().positive().required().messages({
    'any.required': required,
    'number.base': required,
    'number.positive': numberPositive,
    'number.integer': numberInteger,
  });

export const baseLoginSchema = Joi.object({
  email: joiEmail(),
  password: joiPassword(),
});

export const registerSchema = baseLoginSchema.keys({
  name: joiName(),
  surname: joiSurname(),
  username: joiUsername(),
  confirmPassword: joiConfirmPassword(),
  avatar: joiAvatar(),
  age: joiAge(),
});

export const userProfileSchema = Joi.object({
  name: joiName(),
  surname: joiSurname(),
  username: joiUsername(),
  avatar: joiAvatar(),
  age: joiAge(),
});
