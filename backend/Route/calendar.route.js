import express from 'express';
import { getEvents, addEvent } from '../Controller/calendar.controller.js';

const router = express.Router();

router.get('/GetEvents', getEvents);
router.post('/AddEvents', addEvent);

export default router;