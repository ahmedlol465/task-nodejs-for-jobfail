// Importing necessary modules and dependencies
import { Router } from "express";
import * as Categorycontroller from "./category.mode.js";
import expressAsynchandler from "express-async-handler";
import { auth } from "../../middleware/auth.middleware.js";
// import { endPointsRoles } from "../model.endPoint.roles.js";

// Creating an Express router instance
const router = Router();

router.get("/getCateegory", auth(),expressAsynchandler(Categorycontroller.getCategory));
router.delete("/deleteCategory", auth(), expressAsynchandler(Categorycontroller.deleteCategory));
router.put("/updateCateegory",auth(), expressAsynchandler(Categorycontroller.updateCategory));
router.post("/addCategory",auth(), expressAsynchandler(Categorycontroller.addCategory));

export default router;
