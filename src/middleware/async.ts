import console from "console";
import { NextFunction } from "express";
import { logger } from "../logger/index";
import mongoLogger from "../logger/mongodb-logger";

export const asyncWrapper = (fn: Function) => {
  return async (req: any, res: any, next: any) => {
    try {
      // logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
      mongoLogger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
      await fn(req, res, next);
    } catch (err) {
      logger.error(err);
      next(err);
    }
  };
};
