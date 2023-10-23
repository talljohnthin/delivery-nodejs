import UserTokenModel from "../models/userToken.model";
import jwt from "jsonwebtoken";

const verifyRefreshToken = (refreshToken: string): Promise<any> => {
  const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY as string;

  return new Promise(async (resolve, reject) => {
    const doc = await UserTokenModel.findOne({ token: refreshToken });
    if (!doc) {
      return reject({ error: true, message: "Invalid refresh token" });
    }

    jwt.verify(refreshToken, privateKey, (err, tokenDetails: any) => {
      if (err) {
        return reject({ error: true, message: "Invalid refresh token" });
      }
      resolve({
        tokenDetails,
        error: false,
        message: "Valid refresh token",
      });
    });
  });
};

export default verifyRefreshToken;
