// import pool from "../config/dbconnector";
// import { CommonHelper } from "../helper/common.helper";
import { PostgresAdapter } from "../adapter/postgreAdapter";
import { MongoDBAdapter } from "../adapter/mongodbAdapter";
import { postgresConfig, mongoConfig } from "../config/connection";
import { asyncWrapper } from "../middleware/async";
import mongoose from "mongoose";
import { Request, Response } from "express";
import { ObjectId } from "bson";

export class TodosController {
  public post = async (req: Request, res: Response) => {
    // c: postgresConfig;
    const id = req.params.id;
    const body = req.body;
    console.log(body);
    const mongoAdapter = new MongoDBAdapter(mongoConfig);
    await mongoAdapter.connect();
    await mongoAdapter.postQuery(id, body);

    // const sql = "SELECT * FROM users";
    // const todos = await postgresAdapter.query(sql);

    res.send({ test: "query" });
  };
  public put = async (req: Request, res: Response) => {
    // c: postgresConfig;
    const id = req.params.id;
    const body = req.body;

    const mongoAdapter = new MongoDBAdapter(mongoConfig);
    await mongoAdapter.connect();
    await mongoAdapter.putQuery(id, body);

    // const sql = "SELECT * FROM users";
    // const todos = await postgresAdapter.query(sql);

    res.send({ test: "query" });
  };

  public getList =
    // asyncWrapper
    async (req: Request, res: Response) => {
      const id = req.params.id;
      const mongoAdapter = new MongoDBAdapter(mongoConfig);
      await mongoAdapter.connect();
      const filter = { _id: new ObjectId(id), "todos.statusID": status.ACTIVE };
      const projection = { todos: 1, _id: 0 };
      const todos = await mongoAdapter.getListQuery(filter, projection);

      // const sql = "SELECT * FROM users";
      // const todos = await postgresAdapter.query(sql);

      res.send(todos);
    };
}

export interface Todo {
  _id: mongoose.Types.ObjectId;
  taskName: string;
  isReminder: boolean;
  toDate: string;
  statusID: number;
}

export interface ResponseBase {
  response: any;
  meta: any;
}

export const status = {
  ACTIVE: 1,
  DELETED: 2,
};
