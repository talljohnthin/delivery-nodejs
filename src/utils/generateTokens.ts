import jwt from "jsonwebtoken";
import UserTokenModel from "../models/userToken.model";

const generateTokens = async (user: any) => {
  try {
    const payload = { _id: user._id };
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

    const userToken = await UserTokenModel.findOne({ userId: user._id });

    if (userToken) await userToken.deleteOne();

    await new UserTokenModel({ userId: user._id, token: refreshToken }).save();

    return Promise.resolve({ accessToken, refreshToken });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default generateTokens;
