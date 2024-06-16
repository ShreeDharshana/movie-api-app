import express, { Router } from "express";
import {
  movieCreate,
  movieDelete,
  movieIndex,
  movieDetail,
  movieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

//crud operations-get,post,put,delete
router.post("/", movieCreate);
router.get("/", movieIndex);
router.get("/:id", movieDetail);
router.put("/:id", movieUpdate);
router.delete("/:id", movieDelete);
export default router;
