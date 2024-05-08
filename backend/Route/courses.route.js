import express from 'express'
import { registerCourse, delCourse, updateCourse, getCoursesData, getCoursesCount } from '../Controller/courses.controller.js';
const router=express.Router();


router.post("/courseReg", registerCourse)
router.get("/coursesData", getCoursesData)
router.delete("/delCourse/:id", delCourse)
router.put("/updateCourse/:id", updateCourse)
router.get("/courseCount", getCoursesCount)
export default router;