import CourseAssignment from '../Model/courseAssignment.model.js';
import AddTeacher from '../Model/teacher.model.js';
import Courses from '../Model/courses.model.js';

export const assignCourseToTeacher = async (req, res) => {
    const { teacherId, courseId } = req.body;

    try {
        // Find the teacher by ID
        const teacher = await AddTeacher.findById(teacherId);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        // Find the course by ID
        const course = await Courses.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Check if the assignment already exists for this teacher
        const existingAssignmentForTeacher = await CourseAssignment.findOne({ teacherId, courseId });
        if (existingAssignmentForTeacher) {
            return res.status(400).json({ message: 'This course is already assigned to this teacher' });
        }

        // Check if the course is already assigned to another teacher
        const existingAssignmentForCourse = await CourseAssignment.findOne({ courseId });
        if (existingAssignmentForCourse) {
            return res.status(400).json({ message: 'This course is already assigned to another teacher' });
        }

        // Create a new course assignment document
        const courseAssignment = new CourseAssignment({
            teacherId,
            courseId
        });

        // Save the course assignment to the database
        await courseAssignment.save();

        // Update the teacher's Subject field
        teacher.Subject = courseId;
        await teacher.save();

        res.status(200).json({ message: 'Course assigned to teacher successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

// GET all course assignments
export const getAllAssignments = async (req, res) => {
    try {
        // Retrieve all course assignments from the database
        const assignments = await CourseAssignment.find().populate('teacherId courseId'); // Populate the references
        
        res.status(200).json({ assignments });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};
