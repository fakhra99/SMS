import express from 'express';
import {
  createFeeVoucher,
  getAllFeeVouchers,
  getFeeVoucherById,
  updateFeeVoucherById,
  deleteFeeVoucherById
} from '../Controller/feevoucher.controller.js';

const router = express.Router();

// Create a new fee voucher
router.post('/fee-vouchers', createFeeVoucher);

// Get all fee vouchers
router.get('/fee-vouchers', getAllFeeVouchers);

// Get a single fee voucher by ID
router.get('/fee-vouchers/:id', getFeeVoucherById);

// Update a fee voucher by ID
router.put('/fee-vouchers/:id', updateFeeVoucherById);

// Delete a fee voucher by ID
router.delete('/fee-vouchers/:id', deleteFeeVoucherById);

export default router;
