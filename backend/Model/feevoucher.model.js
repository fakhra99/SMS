import mongoose from 'mongoose';
const { Schema } = mongoose;

const feeVoucherSchema = new Schema({
    title: { type: String, required: true },
    studentId: { type: String, required: true },
    studentClass: { type: String, required: true },
    classSection: { type: String, required: true },
    feeVoucherNo: { type: String, required: true },
    depositDueDate: { type: Date, required: true },
    depositedBy: { type: String, required: true },
    bankName: { type: String, required: true },
    branchCode: { type: String, required: true },
    totalTuitionFee: { type: Number, required: true },
    externalFinancialAssistance: { type: Number, required: true },
    totalFeeTillDueDate: { type: Number, required: true },
    fineChargeAfterDueDate: { type: Number, required: true },
    totalAfterDueDate: { type: Number, required: true },
    depositDate: { type: Date, required: false },
    cashierSign: { type: String, required: false }
});

const FeeVoucher = mongoose.model('FeeVoucher', feeVoucherSchema);

export default FeeVoucher;
