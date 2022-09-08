import express from "express";
import { Pool } from "pg";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get("/", (req, res) => {
      // res.set("Access-Control-Allow-Origin", "http://localhost:4200");
      res.json({
        respose: "Hello World!",
        meta: null,
      });
    });
    this.express.use("/", router);
  }
}

export default new App().express;

// const { Client } = require('pg');
// var fs = require('fs');

// const client = new Client({
//   user: 'sgpostgres',
//   host: 'SG-NewPostgreCluster-5-pgsql-master.devservers.scalegrid.io',
//   database: 'postgres',
//   password: ‘password’',
//   port: 6432,
//   ssl  : {
//     ca : fs.readFileSync('<path to CA cert file>')
//   }
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
