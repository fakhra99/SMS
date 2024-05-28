import express from 'express';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../Controller/calendar.controller.js';

const router = express.Router();

router.get('/GetEvents', getEvents);
router.post('/AddEvents', addEvent);
router.put('/updateEvent/:id', updateEvent);
router.delete('/deleteEvent/:id', deleteEvent)

export default router;