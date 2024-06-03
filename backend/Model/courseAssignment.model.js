import mongoose from 'mongoose';

const courseAssignmentSchema = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    }
    // Add more fields as needed
});

const CourseAssignment = mongoose.model('CourseAssignment', courseAssignmentSchema);

export default CourseAssignment;
