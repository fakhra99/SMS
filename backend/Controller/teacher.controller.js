import Teacher from "../Model/teacher.model.js";
import Courses from "../Model/courses.model.js"; // Import the Course model

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
        const tchr = await Teacher.findOneAndDelete({ _id: id });
        if (!tchr) {
            return res.status(404).json({ status: 404, message: "Couldn't find teacher", success: false });
        }
        res.json({ status: 200, message: "Teacher deleted", success: true });
    } catch (err) {
        console.log(err);
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

        const tchr = await Teacher.findOneAndUpdate({ _id: id }, payload, { new: true });
        if (!tchr) {
            return res.status(404).json({ status: 404, message: "Teacher not found", success: false });
        }

        res.json({ status: 200, message: "Teacher updated", success: true, tchr });
    } catch (err) {
        console.log(err);
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
