import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({

    FirstName: {
        type: String
    },
    LastName:{
        type: String
    },
    Email:{
        type:String
    },
    Dob:{
        type:Date
    },
    Mobile_No:{
        type:Number
    },
    Image:{
        type:String
    },
    Qualification:{
        type:String
    },

    Subject: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses" 
    },

    Address:{
        type:String
    },
    Salary:{
        type:Number
    },
    Status:{
        type:String,
        enum: ["Active", "Inactive", "Terminated"]
    },
    Gender:{
        type:String,
        default:"Male",
        enum: ["Male", "Female"]
    },
    
})
const AddTeacher = mongoose.model("teachers", teacherSchema);
export default AddTeacher