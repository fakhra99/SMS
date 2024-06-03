import Teacher from '../Model/teacher.model.js';
import Courses from '../Model/courses.model.js'; 
import CourseAssignment from '../Model/courseAssignment.model.js';

// Add teacher
export const add = async (req, res) => {
    try {
        const { First_Name, Last_Name, Email, Dob, Mobile_No, Qualification, Subject, Address, Salary, Status, Gender } = req.body;

        // Validate that the Subject exists
        const course = await Courses.findById(Subject);
        if (!course) {
            return res.status(404).json({ message: "Subject not found" });
        }

        const existingTeacher = await Teacher.findOne({ Email });
        if (existingTeacher) {
            return res.status(401).json({ message: "This teacher already exists" });
        }

        const newTeacher = new Teacher({
            First_Name,
            Last_Name,
            Email,
            Dob,
            Mobile_No,
            Image: req.file ? req.file.filename : undefined,
            Qualification,
            Subject, // Store the subject ID
            Address,
            Salary,
            Status,
            Gender
        });

        await newTeacher.save();

        // Check if the course is already assigned to another teacher
        const existingAssignmentForCourse = await CourseAssignment.findOne({ courseId: Subject });
        if (existingAssignmentForCourse) {
            return res.status(400).json({ message: 'This course is already assigned to another teacher' });
        }

        const courseAssignment = new CourseAssignment({
            teacherId: newTeacher._id,
            courseId: Subject
        });

        await courseAssignment.save();

        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch teachers data
export const GetTeacherData = async (req, res) => {
    try {
        const teachersData = await Teacher.find().populate('Subject'); // Populate the Subject field with course data
        res.status(200).json({ teachersData });
    } catch (err) {
        console.error(err);
        res.status(500).json(err.message);
    }
};

// Delete teacher
export const delTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const tchr = await Teacher.findById(id);
    if (!tchr) {
      return res.status(404).json({ status: 404, message: "Teacher not found", success: false });
    }

    // Delete associated course assignments
    const deletedAssignments = await CourseAssignment.deleteMany({ teacherId: id });
    console.log(`${deletedAssignments.deletedCount} course assignments deleted`);

    // Then delete the teacher
    await Teacher.deleteOne({ _id: id });
    console.log("Teacher deleted successfully");

    res.json({ status: 200, message: "Teacher deleted", success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
};




// Update teacher
export const updateTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        // Validate that the Subject exists if it is being updated
        if (payload.Subject) {
            const course = await Courses.findById(payload.Subject);
            if (!course) {
                return res.status(404).json({ message: "Subject not found" });
            }
        }

        // Fetch the existing teacher
        const existingTeacher = await Teacher.findById(id);
        if (!existingTeacher) {
            return res.status(404).json({ status: 404, message: "Teacher not found", success: false });
        }

        // Check if the subject is being updated
        if (payload.Subject && existingTeacher.Subject.toString() !== payload.Subject) {
            // Update the subject in the teacher document
            existingTeacher.Subject = payload.Subject;
            await existingTeacher.save();

            // Update the subject in course assignments
            await CourseAssignment.updateMany({ teacherId: id }, { courseId: payload.Subject });
        }

        // Update the teacher document
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, payload, { new: true });
        
        res.json({ status: 200, message: "Teacher updated", success: true, updatedTeacher });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};



// Fetch subjects for a specific teacher
export const getTeacherSubjects = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const teacher = await Teacher.findById(teacherId).populate('Subject'); // Populate the Subject field
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.status(200).json({ subjects: teacher.Subject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Count teachers
export const countTeachers = async (req, res) => {
    try {
        const count = await Teacher.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Get gender distribution of students
export const getGender = async (req, res) => {
    try {
        const genderDistribution = await Teacher.aggregate([
            {
                $group: {
                    _id: "$Gender",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({ genderDistribution });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};