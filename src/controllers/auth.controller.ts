import express from "express";
import bcrypt from "bcrypt";
import generateTokens from "../utils/generateTokens";
import { signUpBodyValidation, logInBodyValidation } from "../utils/validation";
import { UserModel } from "../models/user.model";

// registration
export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { error } = signUpBodyValidation(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }

    const user = await UserModel.findOne({ phone: req.body.phone });
    if (user) {
      return res
        .status(400)
        .json({ error: true, message: "User with given phone already exist" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new UserModel({ ...req.body, password: hashPassword }).save();

    res
      .status(201)
      .json({ error: false, message: "Account created sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

// login
export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { error } = logInBodyValidation(req.body);

    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }

    const user = await UserModel.findOne({ phone: req.body.phone });

    if (!user) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid phone or password" });
    }

    const verifiedPassword = await bcrypt.compare(
      req.body.password,
      user.password as string
    );

    if (!verifiedPassword)
      return res
        .status(401)
        .json({ error: true, message: "Invalid phone or password" });

    const { accessToken, refreshToken } = await generateTokens(user);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    res.status(200).json({
      error: false,
      message: "Logged in sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
