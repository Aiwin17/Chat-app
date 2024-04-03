import express from "express";
import { getmessages, message } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/protect.route.js";
const router = express.Router();

router.get("/:id", protectRoute, getmessages);
router.post("/sender/:id", protectRoute, message);

export default router;
