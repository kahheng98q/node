import express, { Router } from "express";
import { TodosController } from "../controllers/todosController";

const router = Router();
const todosController = new TodosController();

router
  .route("/todos/:id")
  .get(todosController.getList)
  .post(todosController.post)
  .put(todosController.put);

export default router;
