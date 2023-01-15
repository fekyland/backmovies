import { Router } from "express";
const router = Router();

import MovieController  from "../controllers/MovieController.js"

router.get("/", MovieController.getAll);
router.get("/id/:id", MovieController.getById);
//router.get("/query/:query", MovieController.getQuery);
export default router;