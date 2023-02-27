import express from "express";
const router = express.Router();
const reqInputUser = [{ name: "KH", age: "18" }];
router.get("/", (req, res) => {
    res.send(reqInputUser);
});
export default router;
