// import pool from "../config/dbconnector";
import { CommonHelper } from "../helper/common.helper";
// import { logger } from "../logger/index";
import { asyncWrapper } from "../middleware/async";

export class TodosController {
  public async test(req: any, res: any) {
    c: CommonHelper;
    const sql = "SELECT * FROM users";
    const todos = await CommonHelper.common(sql);
    res.send(todos);
    // res.statusCode(200).json(todos);
  }

  public get = asyncWrapper(async (req: any, res: any) => {
    c: CommonHelper;
    const sql = "SELECT * FROM users";
    const todos = await CommonHelper.common(sql);
    res.send(todos);
  });

  // public async test2() {
  //   return asyncWrapper(this.test);
  // }
}

export interface ResponseBase {
  response: any;
  meta: any;
}
// export default TodosController;
