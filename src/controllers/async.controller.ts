import { NextFunction, Request, Response } from "express";

export default (callback: any) =>
  (req: Request, res: Response, next: NextFunction) =>
    callback(req, res, next).catch(next);
