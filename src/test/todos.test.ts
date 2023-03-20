import request from "supertest";
import app from "../app";
import todosRouter from "../routers/todosRouter";

describe("Todos router", () => {
  // Initialize the express app with the todos router
  beforeAll(() => {
    app.use(todosRouter);
  });

  describe("GET /todos/:id", () => {
    test("should return a list of todos for a given id", async () => {
      const response = await request(app).get("/todos/123");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        /* expected response */
      });
    });
  });

  describe("POST /todos/:id", () => {
    test("should create a new todo", async () => {
      const response = await request(app).post("/todos/123").send({
        /* todo data */
      });
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        /* expected response */
      });
    });
  });

  describe("PUT /todos/:id", () => {
    test("should update a todo", async () => {
      const response = await request(app).put("/todos/123").send({
        /* updated todo data */
      });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        /* expected response */
      });
    });
  });
});
