import { Router } from "express";
const router = Router();

import MovieController  from "../controllers/MovieController.js"

router.get("/", MovieController.getAll);

export default router;