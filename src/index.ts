import app from "./App";
import routes from "./routers";
import middleware from "./middleware";

const port = process.env.PORT || 3000;

// app.get("/user", user);
app.use("/test", routes.user);
app.use("/", routes.todos);
app.use(middleware.notFound);
app.use(middleware.errHandlerMiddleware);
// app.use("/app", app);

app.get("/", (req, res) => {
  res.send("Hello GGGGGGGGGGGG");
});

// app.get("/tests", (req, res) => {
//   // console.log(reqInputUser);
//   res.send("Hello GGGGGGGGGGGG");
// });

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}/`);
});
