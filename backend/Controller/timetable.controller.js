import mongoose from "mongoose";
import TimeTable from "../Model/timetable.model.js"; // Import your timetable model
import Teacher from "../Model/teacher.model.js"; // Import your teacher model
import Course from "../Model/courses.model.js"; // Import your course model

// Helper function to convert time string to ISO 8601 string with a fixed date
const convertToISOTime = (time) => {
  const [hour, minute, period] = time.match(/(\d+):?(\d+)?(am|pm)/i).slice(1);
  let hours = parseInt(hour);
  if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
  if (period.toLowerCase() === "am" && hours === 12) hours = 0;
  const minutes = minute ? parseInt(minute) : 0;
  return new Date(1970, 0, 1, hours, minutes).toISOString();
};

// Controller function to create a new timetable entry
const createTimetableEntry = async (req, res) => {
  try {
    let { startTime, endTime, day, teacherId, courseId } = req.body;

    // Check if all required fields are provided
    if (!startTime || !endTime || !day || !teacherId || !courseId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the provided teacherId and courseId are valid ObjectIDs
    if (!mongoose.Types.ObjectId.isValid(teacherId) || !mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid teacher or course ID" });
    }

    // Check if the provided teacherId and courseId exist
    const teacher = await Teacher.findById(teacherId);
    const course = await Course.findById(courseId);
    if (!teacher || !course) {
      return res.status(404).json({ message: "Teacher or course not found" });
    }

    // Convert times to ISO strings with a fixed date
    startTime = convertToISOTime(startTime);
    endTime = convertToISOTime(endTime);

    // Create a new timetable entry
    const newEntry = new TimeTable({
      startTime,
      endTime,
      day,
      teacher: teacherId,
      course: courseId
    });

    // Save the new timetable entry to the database
    const savedEntry = await newEntry.save();

    // Return the newly created timetable entry
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error("Error creating timetable entry:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function to retrieve all timetable entries
const getAllTimetableEntries = async (req, res) => {
  try {
    // Retrieve all timetable entries from the database
    const entries = await TimeTable.find().populate("teacher").populate("course");

    // Return the list of timetable entries
    res.status(200).json(entries);
  } catch (error) {
    console.error("Error retrieving timetable entries:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createTimetableEntry, getAllTimetableEntries };