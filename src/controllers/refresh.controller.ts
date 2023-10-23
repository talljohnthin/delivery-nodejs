import express from "express";
import UserTokenModel from "../models/userToken.model";
import jwt from "jsonwebtoken";
import verifyRefreshToken from "../utils/verifyRefreshToken";
import { refreshTokenBodyValidation } from "../utils/validation";

// get new access token
export const getNewAccessToken = async (
  req: express.Request,
  res: express.Response
) => {
  verifyRefreshToken(req.cookies.refreshToken)
    .then(({ tokenDetails }) => {
      const payload = { _id: tokenDetails._id };

      const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
        { expiresIn: "15m" }
      );

      const refreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
        { expiresIn: "30d" }
      );

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
      });

      res.status(200).json({
        error: false,
        message: "Access token created successfully",
      });
    })
    .catch((err) =>
      res.status(400).json({ error: true, message: err.message })
    );
};

// logout
export const deleteToken = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { error } = refreshTokenBodyValidation(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }

    const userToken = await UserTokenModel.findOne({
      token: req.cookies.refreshToken,
    });

    if (!userToken) {
      return res
        .status(200)
        .json({ error: false, message: "Logged Out Sucessfully" });
    }

    await userToken.deleteOne();

    res.status(200).json({ error: false, message: "Logged Out Sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
