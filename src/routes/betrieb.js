import express from "express";
import { betriebController } from '../controller/index.js';


const router = express.Router();

// Get Data of All Betrieb Service
router.get("/all-betrieb/", betriebController.getAllBetriebs);

export default router;