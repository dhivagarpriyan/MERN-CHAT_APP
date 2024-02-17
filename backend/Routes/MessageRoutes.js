import express from "express"
import { GetMessage, SendMessage } from "../Controllers/MessageController.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id",protectRoute,GetMessage);
router.post("/send/:id",protectRoute,SendMessage);

export default router