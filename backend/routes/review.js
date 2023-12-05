import { Router } from "express";
import { isAuth } from "../middlewares/user";
import { addReview } from "../controllers/review";

const router = Router();

router.post("/review/add-review", isAuth, addReview);

export default router;
