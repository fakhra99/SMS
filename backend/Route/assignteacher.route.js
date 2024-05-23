import express from 'express';
import {
  createAssignment,
  getAssignments,
  updateAssignment,
  deleteAssignment
} from '../Controller/assignteacher.controller.js';

const router = express.Router();

router.post('/assignments', createAssignment);
router.get('/assignments', getAssignments);
router.put('/assignments/:id', updateAssignment);
router.delete('/assignments/:id', deleteAssignment);

export default router;
