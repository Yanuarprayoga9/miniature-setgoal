import express from "express";
import { getGoals,setGoal,updateGoal,deleteGoal } from "../controller/goalController.js";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";

router.get('/',protect,getGoals)
router.post('/',protect,setGoal)
router.patch('/:id',protect,updateGoal)
router.delete('/"id',protect,deleteGoal);

export default router