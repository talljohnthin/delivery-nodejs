import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import { IUser } from "../types";

const signUpBodyValidation = (body: IUser) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    phone: Joi.number().greater(8).required().label("Phone"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(body);
};

const logInBodyValidation = (body: IUser) => {
  const schema = Joi.object({
    phone: Joi.number().greater(8).required().label("Phone"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(body);
};

const refreshTokenBodyValidation = (body: IUser) => {
  const schema = Joi.object({
    refreshToken: Joi.string().required().label("Refresh Token"),
  });
  return schema.validate(body);
};

export {
  signUpBodyValidation,
  logInBodyValidation,
  refreshTokenBodyValidation,
};
