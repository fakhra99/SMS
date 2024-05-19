import express from 'express'
import { createTimetableEntry, getAllTimetableEntries } from '../Controller/timetable.controller.js';
const router=express.Router();


router.post("/createTimetable", createTimetableEntry)
router.get("/getTimetable", getAllTimetableEntries)

export default router;