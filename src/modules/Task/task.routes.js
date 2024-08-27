// Importing necessary modules and dependencies
import { Router } from "express";
import * as Taskcontroller from "./task.controller.js";
import expressAsynchandler from "express-async-handler";
import { auth } from "../../middleware/auth.middleware.js";
// import { endPointsRoles } from "../model.endPoint.roles.js";

// Creating an Express router instance
const router = Router();

router.put("/updateTask", auth(),expressAsynchandler(Taskcontroller.updateTask));
router.delete("/deleteTask", auth(),expressAsynchandler(Taskcontroller.deleteTask));
router.post("/addTask",auth(), expressAsynchandler(Taskcontroller.addTask));
router.get("/getTask",auth(), expressAsynchandler(Taskcontroller.getTask));

router.get("/getTaskByPagination", expressAsynchandler(Taskcontroller.getAllTaskByPagination));
router.get("/getAllTaskByFilter", expressAsynchandler(Taskcontroller.getAllTaskByFilter));
router.get("/getAllTaskBySerch", expressAsynchandler(Taskcontroller.getAllTaskBySerch));
export default router;
