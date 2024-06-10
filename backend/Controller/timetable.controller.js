import mongoose from "mongoose";
import TimeTable from "../Model/timetable.model.js"; // Import your timetable model
import Teacher from "../Model/teacher.model.js"; // Import your teacher model
import Course from "../Model/courses.model.js"; // Import your course model
import Class from "../Model/classes.model.js"; // Import your class model

// Helper function to convert time string to ISO 8601 string with a fixed date
const convertToISOTime = (time) => {
  const [hour, minute, period] = time.match(/(\d+):?(\d+)?(am|pm)/i).slice(1);
  let hours = parseInt(hour);
  if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
  if (period.toLowerCase() === "am" && hours === 12) hours = 0;
  const minutes = minute ? parseInt(minute) : 0;
  return new Date(1970, 0, 1, hours, minutes).toISOString();
};

// Helper function to check for time overlap
const isTimeOverlap = (newStartTime, newEndTime, existingStartTime, existingEndTime) => {
  return newStartTime < existingEndTime && newEndTime > existingStartTime;
};

// Controller function to create a new timetable entry
const createTimetableEntry = async (req, res) => {
  try {
    let { startTime, endTime, day, teacherId, courseId, classId } = req.body;

    // Check if all required fields are provided
    if (!startTime || !endTime || !day || !teacherId || !courseId || !classId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the provided teacherId, courseId, and classId are valid ObjectIDs
    if (!mongoose.Types.ObjectId.isValid(teacherId) || !mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(classId)) {
      return res.status(400).json({ message: "Invalid teacher, course, or class ID" });
    }

    // Check if the provided teacherId, courseId, and classId exist
    const teacher = await Teacher.findById(teacherId);
    const course = await Course.findById(courseId);
    const classObj = await Class.findById(classId);
    if (!teacher || !course || !classObj) {
      return res.status(404).json({ message: "Teacher, course, or class not found" });
    }

    // Check if the course is assigned to the teacher
    if (!teacher.Subject.equals(courseId)) {
      return res.status(400).json({ message: "The course is not assigned to this teacher" });
    }

    // Convert times to ISO strings with a fixed date
    startTime = convertToISOTime(startTime);
    endTime = convertToISOTime(endTime);

    // Check for time conflicts with existing timetable entries for the teacher on the same day
    const existingTeacherEntries = await TimeTable.find({ day, teacher: teacherId });
    const newStartTime = new Date(startTime);
    const newEndTime = new Date(endTime);

    for (const entry of existingTeacherEntries) {
      const existingStartTime = new Date(entry.startTime);
      const existingEndTime = new Date(entry.endTime);
      if (isTimeOverlap(newStartTime, newEndTime, existingStartTime, existingEndTime)) {
        return res.status(409).json({ message: "Teacher is already assigned to another class during this time" });
      }
    }

    // Check for time conflicts with existing timetable entries for the class on the same day
    const existingClassEntries = await TimeTable.find({ day, class: classId });
    for (const entry of existingClassEntries) {
      const existingStartTime = new Date(entry.startTime);
      const existingEndTime = new Date(entry.endTime);
      if (isTimeOverlap(newStartTime, newEndTime, existingStartTime, existingEndTime)) {
        return res.status(409).json({ message: "Class is already assigned to another teacher during this time" });
      }
    }

    // Create a new timetable entry
    const newEntry = new TimeTable({
      startTime,
      endTime,
      day,
      teacher: teacherId,
      course: courseId,
      class: classId
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

const getAllTimetableEntries = async (req, res) => {
  try {
    // Retrieve all timetable entries from the database
    const entries = await TimeTable.find()
      .populate("teacher")
      .populate("course")
      .populate("class");

    // Return the list of timetable entries
    res.status(200).json(entries);
  } catch (error) {
    console.error("Error retrieving timetable entries:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to get timetable entries for a specific teacher
const getTimetableByTeacher = async (req, res) => {
  const { teacherId } = req.params;

  try {
    const timetableEntries = await TimeTable.find({ teacher: teacherId })
      .populate('teacher')
      .populate('course')
      .populate('class');

    if (timetableEntries.length === 0) {
      return res.status(404).json({ message: 'No timetable entries found for this teacher' });
    }

    res.status(200).json(timetableEntries);
  } catch (error) {
    console.error('Error fetching timetable entries:', error);
    res.status(500).json({ message: 'Error fetching timetable entries', error });
  }
};


// Controller to get timetable entries for a specific class
const getTimetableByClass = async (req, res) => {
  const { classId } = req.params;

  try {
    const timetableEntries = await TimeTable.find({ class: classId })
      .populate('teacher')
      .populate('course')
      .populate('class');

    if (timetableEntries.length === 0) {
      return res.status(404).json({ message: 'No timetable entries found for this class' });
    }

    res.status(200).json(timetableEntries);
  } catch (error) {
    console.error('Error fetching timetable entries:', error);
    res.status(500).json({ message: 'Error fetching timetable entries', error });
  }
};

export { createTimetableEntry, getAllTimetableEntries, getTimetableByTeacher, getTimetableByClass };