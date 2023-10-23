import jwt from "jsonwebtoken";
import express from "express";

interface IRequest extends express.Request {
  user?: string | jwt.JwtPayload;
}

const isAuthenticated = async (
  req: IRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.cookies.accessToken;
  if (!token)
    return res
      .status(403)
      .json({ error: true, message: "Access Denied: No token provided" });

  try {
    const tokenDetails = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_PRIVATE_KEY as string
    );

    req.user = tokenDetails;

    next();
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .json({ error: true, message: "Access Denied: Invalid token" });
  }
};

export default isAuthenticated;
