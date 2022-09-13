import pool from "../config/dbconnector";
import { CommonHelper } from "../helper/common.helper";
import { logger } from "../logger/index";
class TodosController {
  public async get(req: any, res: any) {
    try {
      c: CommonHelper;
      const sql = "SELECT * FROM users";

      const todos = await CommonHelper.common(sql);
      logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.send(todos);
    } catch (error) {
      logger.error(error);
      res.status(400).send(error);
    }
  }
}
export interface ResponseBase {
  response: any;
  meta: any;
}
export default TodosController;
