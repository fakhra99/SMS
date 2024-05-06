import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({

    course_code:{
        type:Number
    },
    course_Title:{
        type:String
    },
    course_Type:{
        default:"Theory",
        enum:["Theory", "Practical"],
        type:String
    }
})

const Courses = mongoose.model("courses", coursesSchema)
export default Courses 