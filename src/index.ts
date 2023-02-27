import app from "./App";
import routes from "./routers";
import middleware from "./middleware";

const port = process.env.PORT || 3000;

// app.use("/test", routes.user);
app.use("/", routes.todos);

app.use(middleware.notFound);
app.use(middleware.errHandlerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello GGGGGGGGGGGG");
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}/`);
});
