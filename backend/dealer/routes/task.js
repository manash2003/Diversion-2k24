import express from 'express'
import { newtask ,getalltask, getmytask , updatetask , deletetask} from '../controllers/task.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();
router.get("/all" , getalltask)
router.post("/new" ,isAuthenticated, newtask);
router.get("/my" ,isAuthenticated, getmytask);
router.route("/:id").put(isAuthenticated,updatetask).delete(isAuthenticated,deletetask);

export default router ;