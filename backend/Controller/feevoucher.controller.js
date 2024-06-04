import FeeVoucher from '../Model/feevoucher.model.js';

// Create a new fee voucher
export const createFeeVoucher = async (req, res) => {
    try {
        const feeVoucher = await FeeVoucher.create(req.body);
        res.status(201).json(feeVoucher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all fee vouchers
export const getAllFeeVouchers = async (req, res) => {
    try {
        const feeVouchers = await FeeVoucher.find();
        res.status(200).json(feeVouchers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single fee voucher by ID
export const getFeeVoucherById = async (req, res) => {
    try {
        const feeVoucher = await FeeVoucher.findById(req.params.id);
        if (!feeVoucher) {
            return res.status(404).json({ message: 'Fee voucher not found' });
        }
        res.status(200).json(feeVoucher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a fee voucher by ID
export const updateFeeVoucherById = async (req, res) => {
    try {
        const updatedFeeVoucher = await FeeVoucher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFeeVoucher) {
            return res.status(404).json({ message: 'Fee voucher not found' });
        }
        res.status(200).json(updatedFeeVoucher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a fee voucher by ID
export const deleteFeeVoucherById = async (req, res) => {
    try {
        const deletedFeeVoucher = await FeeVoucher.findByIdAndDelete(req.params.id);
        if (!deletedFeeVoucher) {
            return res.status(404).json({ message: 'Fee voucher not found' });
        }
        res.status(200).json({ message: 'Fee voucher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};