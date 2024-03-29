import app from "./App";
import routes from "./routers";
import middleware from "./middleware";
import dotenv from "dotenv";
// import express from "express";
import bodyParser from "body-parser";

dotenv.config();
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes.todos);

app.use(middleware.notFound);
app.use(middleware.errHandlerMiddleware);
// app.use(middleware.normalMiddleware);

app.get("/", (req, res) => {
  res.send("Hello GGGGGGGGGGGG");
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}/`);
});
