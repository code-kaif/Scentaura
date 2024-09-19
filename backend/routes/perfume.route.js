import express from "express";
import { allPerfume, onePerfume } from "../controller/perfume.controller.js";

const perfumeRouter = express.Router();

perfumeRouter.get("/", allPerfume).get("/:id", onePerfume);

export default perfumeRouter;
