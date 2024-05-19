import express from 'express'
import { registerCourse, delCourse, updateCourse, getCoursesData, countCourses } from '../Controller/courses.controller.js';
const router=express.Router();


router.post("/courseReg", registerCourse)
router.get("/coursesData", getCoursesData)
router.delete("/delCourse/:id", delCourse)
router.put("/updateCourse/:id", updateCourse)

router.get("/countCourses", countCourses);
export default router;