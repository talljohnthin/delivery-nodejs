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
  const { error } = refreshTokenBodyValidation(req.body);
  if (error)
    return res
      .status(400)
      .json({ error: true, message: error.details[0].message });

  verifyRefreshToken(req.body.refreshToken)
    .then(({ tokenDetails }) => {
      const payload = { _id: tokenDetails._id, roles: tokenDetails.roles };
      const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
        { expiresIn: "15m" }
      );
      res.status(200).json({
        error: false,
        accessToken,
        message: "Access token created successfully",
      });
    })
    .catch((err) => res.status(400).json(err));
};

// logout
export const deleteToken = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { error } = refreshTokenBodyValidation(req.body);
    if (error)
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });

    const userToken = await UserTokenModel.findOne({
      token: req.body.refreshToken,
    });

    if (!userToken)
      return res
        .status(200)
        .json({ error: false, message: "Logged Out Sucessfully" });

    //await userToken.remove();

    res.status(200).json({ error: false, message: "Logged Out Sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
