import express from 'express';
import { createClass, getClass, getAllClasses, countClasses } from '../Controller/classes.controller.js';

const router = express.Router();

router.post('/classes', createClass);
router.get('/classes/:id', getClass);
router.get('/classes', getAllClasses);
router.get('/countClasses', countClasses)

export default router;