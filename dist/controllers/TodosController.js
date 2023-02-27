// import pool from "../config/dbconnector";
import { CommonHelper } from "../helper/common.helper";
// import { logger } from "../logger/index";
import { asyncWrapper } from "../middleware/async";
export class TodosController {
    async test(req, res) {
        c: CommonHelper;
        const sql = "SELECT * FROM users";
        const todos = await CommonHelper.common(sql);
        res.send(todos);
        // res.statusCode(200).json(todos);
    }
    get = asyncWrapper(async (req, res) => {
        c: CommonHelper;
        const sql = "SELECT * FROM users";
        const todos = await CommonHelper.common(sql);
        res.send(todos);
    });
}
// export default TodosController;
