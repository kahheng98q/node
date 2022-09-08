import pool from "../config/dbconnector";
import { CommonHelper } from "../helper/common.helper";

class TodosController {
  public async get(req: any, res: any) {
    try {
      c: CommonHelper;
      const sql = "SELECT * FROM users";

      const todos = await CommonHelper.common(sql);

      res.send(todos);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
export interface ResponseBase {
  response: any;
  meta: any;
}
export default TodosController;
