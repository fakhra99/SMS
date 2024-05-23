import mongoose from "mongoose";

const Assignteacher = new mongoose.Schema({
  teacher: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  }
});

const AssignTeacher = mongoose.model("Assign", Assignteacher);
export default AssignTeacher;
