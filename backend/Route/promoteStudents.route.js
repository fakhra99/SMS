import express from 'express';
import { promoteStudents } from '../Controller/promoteStudents.controller.js';

const router = express.Router();

router.post('/promote', promoteStudents);

export default router;