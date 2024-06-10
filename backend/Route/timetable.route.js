import express from 'express';
import { createTimetableEntry, getAllTimetableEntries, getTimetableByTeacher, getTimetableByClass } from '../Controller/timetable.controller.js';

const router = express.Router();

router.post("/createTimetable", createTimetableEntry);
router.get("/getTimetable", getAllTimetableEntries);
router.get("/getTimetableByTeacher/:teacherId", getTimetableByTeacher);
router.get("/getTimetableByClass/:classId", getTimetableByClass);

export default router;