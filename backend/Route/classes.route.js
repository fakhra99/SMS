import express from 'express';
import { createClass, getClass, getAllClasses } from '../Controller/classes.controller.js';

const router = express.Router();

router.post('/classes', createClass);
router.get('/classes/:id', getClass);
router.get('/classes', getAllClasses);

export default router;