import mongoose from "mongoose";

const { Schema } = mongoose;

const timetableSchema = new Schema({
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  day: {
    type: String,
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  },
     teacher: { // Reference to the teacher collection
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers', // Make sure this matches the model name used when creating the model
        required: true
    },
    course: { // Reference to the courses collection
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses', // Make sure this matches the model name used when creating the model
        required: true
    }
});

const TimeTable = mongoose.model("Timetable", timetableSchema);

export default TimeTable;
