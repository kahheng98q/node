import express from "express";
class App {
    express;
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
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
