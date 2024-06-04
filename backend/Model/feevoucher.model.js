import mongoose from "mongoose";
const { Schema } = mongoose;

const feeVoucherSchema = new Schema({
    studentId: { 
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
   
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    branchName: {
         type: String, required: true 
        },
    feeVoucherNo: {
         type: String, required: true
         },
    depositDue: 
    { type: Date, required: true 

    },
    depositedBy: 
    { type: String, required: true

     },
    tuitionFeeApril: 
    { type: Number, required: true 

    },
    externalFinancialAssistance:
     { type: Number, required: true 

     },
    totalFeeTillDueDate: 
    { type: Number, required: true 

    },
    fineChargeAfterDueDate: 
    { type: Number, required: true 

    },
    totalAfterDueDate: 
    { type: Number, required: true 

    },
    cashierSign: 
    { type: String, required: true
        
     }
});

const FeeVoucher = mongoose.model("FeeVoucher", feeVoucherSchema);

export default FeeVoucher;