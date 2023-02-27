import express from "express";
import bodyParser from "body-parser";
import todosRouter from "../routers/TodosRouter";
import pool from "./dbconnector";
class Server {
    app;
    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: "1mb" })); // 100kb default
    }
    dbConnect() {
        pool.connect(function (err, client, done) {
            if (err)
                throw new Error(err);
            console.log("Connected");
        });
    }
    routerConfig() {
        this.app.use("/todos", todosRouter);
    }
    start = (port) => {
        return new Promise((resolve, reject) => {
            this.app
                .listen(port, () => {
                resolve(port);
            })
                .on("error", (err) => reject(err));
        });
    };
}
