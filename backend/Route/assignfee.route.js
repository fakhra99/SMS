import express from 'express';
const router = express.Router();
import { assignFee, getFees, getFeeById, updateFee, deleteFee } from '../Controller/assignfee.controller.js';

// Create a new fee assignment
router.post('/Fee', assignFee);

// Get all fee assignments
router.get('/Fee', getFees);

// Get a specific fee assignment by ID
router.get('/Fee/:id', getFeeById);

// Update a fee assignment by ID
router.put('/Fee/:id', updateFee);

// Delete a fee assignment by ID
router.delete('/Fee/:id', deleteFee);

export default router;
