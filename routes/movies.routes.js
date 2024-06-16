import express, { Router } from "express";
import {
  movieCreate,
  movieDelete,
  movieIndex,
  movieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

//crud operations-get,post,put,delete
router.post("/", movieCreate);
router.get("/", movieIndex);
router.put("/movies/:id", movieUpdate);
router.delete("/movies/:id", movieDelete);
export default router;
