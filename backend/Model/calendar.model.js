import mongoose from "mongoose";

const calanderSchema = mongoose.Schema({

    date: {
    type: Date,
    required: true
  },
  eventName: {
    type: String,
    required: true
  }
});
const AddEvent = mongoose.model("events", calanderSchema);
export default AddEvent