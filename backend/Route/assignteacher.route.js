import express from 'express';
import {
  createteacher,
  getteacher,
  updateteacher,
  deleteteacher
} from '../Controller/assignteacher.controller.js';

const router = express.Router();

router.post('/assign', createteacher);
router.get('/assign', getteacher);
router.put('/assign/:id', updateteacher);
router.delete('/assign/:id', deleteteacher);

export default router;