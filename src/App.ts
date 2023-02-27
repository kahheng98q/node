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
