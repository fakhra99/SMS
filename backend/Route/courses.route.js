import express from 'express'
import { registerCourse, delCourse, updateCourse, getCoursesData } from '../Controller/courses.controller.js';
const router=express.Router();


router.post("/courseReg", registerCourse)
router.get("/coursesData", getCoursesData)
router.delete("/delCourse/:id", delCourse)
router.put("/updateCourse/:id", updateCourse)
export default router;