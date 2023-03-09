import express, { Router } from "express";
import { TodosController } from "../controllers/TodosController";

const router = Router();
const todosController = new TodosController();

router.get("/todos/:id", todosController.getList);
router.post("/todos/:id", todosController.post);
router.put("/todos/:id", todosController.put);
// router.post("/todos", todosController.add);

export default router;
