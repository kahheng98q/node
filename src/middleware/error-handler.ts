import { NextFunction } from "express";
import { CustomAPIError } from "../errors/custom-error";

export const errHandlerMiddleware = (
  err: Error,
  req: any,
  res: any,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ error: err });
  }

  return res.status(500).json({ msg: err });
};
