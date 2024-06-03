import mongoose from "mongoose";

const Assignteacher = new mongoose.Schema({
  First_Name: {
    type: String,
    required: true,
    ref:"teachers"
    
  },
  class: {
    type: String,
    required: true,
    ref: "Grades"
  },
  subject: {
    type: String,
    required: true
  }
});

const AssignTeacher = mongoose.model("Assign", Assignteacher);
export default AssignTeacher;