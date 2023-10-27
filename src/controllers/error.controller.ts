import { Request, Response, NextFunction } from "express";

export default (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  res.send({ message: error.message, stack: error.stack });
};
