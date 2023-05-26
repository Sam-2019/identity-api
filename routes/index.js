import express from 'express';
import { getHome } from "../controllers/index.js";
import { getID } from "../controllers/identity.js";

const router = express.Router();
router.get("/", getHome);
router.get("/id/:id", getID);

export default router