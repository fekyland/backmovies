import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
   return res.send("Bienvenidos a mi aplicacion de tareas");
});

export default router;

