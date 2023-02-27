// import pool from "../config/dbconnector";
// import { CommonHelper } from "../helper/common.helper";
import { PostgresAdapter } from "../adapter/postgreAdapter";
import { MongoDBAdapter } from "../adapter/mongodbAdapter";
import { postgresConfig, mongoConfig } from "../config/connection";
import { asyncWrapper } from "../middleware/async";

export class TodosController {
  public add = async (req: any, res: any) => {
    // c: postgresConfig;
    const mongoAdapter = new MongoDBAdapter(mongoConfig);
    await mongoAdapter.connect();
    await mongoAdapter.insertUser("1", "KH");

    // const sql = "SELECT * FROM users";
    // const todos = await postgresAdapter.query(sql);

    res.send({ test: "query" });
  };
  public get =
    // asyncWrapper
    async (req: any, res: any) => {
      const mongoAdapter = new MongoDBAdapter(mongoConfig);
      await mongoAdapter.connect();

      const todos = await mongoAdapter.query('{"name":"KH"}');

      // const sql = "SELECT * FROM users";
      // const todos = await postgresAdapter.query(sql);

      res.send(todos);
    };
}

export interface ResponseBase {
  response: any;
  meta: any;
}
