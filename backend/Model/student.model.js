import mongoose, { mongo } from "mongoose";

const studentSchema = mongoose.Schema({

    studentID: {
        type: String
    },
    Name:{
        type: String
    },
    Dob:{
        type:Date
    },
    Image:{
        type:String
    },
    ClassSection:{
        type:String
    },
    GrNumber:{
        type:Number
    },
    RollNo:{
        type:Number
    },
    Gender:{
        type:String,
        enum: ["Male", "Female"]
    },
    AdmissionDate:{
        type:Date
    },
    GuardiansEmail:{
        type:String
    },
    GuardianName:{
        type:String
    },
    GuardianGender:{
        type:String,
        enum:["Male", "Female"]
    },
    GuardianMobile:{
        type:Number
    }

})
const AddStudent = mongoose.model("Student", studentSchema);
export default AddStudent