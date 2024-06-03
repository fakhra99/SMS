import express from 'express';
import { assignCourseToTeacher, getAllAssignments } from '../Controller/courseAssignment.controller.js';

const router = express.Router();

router.post('/assign-course', assignCourseToTeacher);
router.get('/getassign-course', getAllAssignments);

export default router;