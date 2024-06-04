import express from 'express';
import { createClass, getClass, getAllClasses, countClasses, deleteClass, editClass } from '../Controller/classes.controller.js';

const router = express.Router();

router.post('/classes', createClass);
router.get('/classes/:id', getClass);
router.delete('/class/:id', deleteClass);
router.put('/class/:id', editClass);
router.get('/classes', getAllClasses);
router.get('/countClasses', countClasses)

export default router;