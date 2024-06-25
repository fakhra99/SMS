import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  feeAmount: { type: Number, required: true }
});

const Fee = mongoose.model('Fee', feeSchema);

export default Fee;
