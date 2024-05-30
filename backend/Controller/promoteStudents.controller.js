import Student from '../Model/student.model.js';
import Class from '../Model/classes.model.js';

export const promoteStudents = async (req, res) => {
  const { currentClassName, nextClassName } = req.body;

  try {
    // Find classes by className
    const currentClass = await Class.findOne({ className: currentClassName });
    const nextClass = await Class.findOne({ className: nextClassName });

    if (!currentClass || !nextClass) {
      return res.status(404).json({ message: 'One or both specified classes not found' });
    }

    // Fetch all students in the current class
    const allStudentsInClass = await Student.find({ Class: currentClass._id });
    if (allStudentsInClass.length === 0) {
      return res.status(404).json({ message: 'No students found in the current class' });
    }

    // Filter students who meet the marks criteria
    const eligibleStudents = allStudentsInClass.filter(student => student.Marks >= 50);
    if (eligibleStudents.length === 0) {
      return res.status(404).json({ message: 'No students in the current class are eligible for promotion based on marks' });
    }

    // Promote eligible students
    const eligibleStudentIds = eligibleStudents.map(student => student._id);
    const updateResult = await Student.updateMany(
      { _id: { $in: eligibleStudentIds } },
      { Class: nextClass._id }
    );

    // Construct detailed response
    const ineligibleCount = allStudentsInClass.length - eligibleStudents.length;
    res.status(200).json({
      message: 'Promotion completed',
      details: {
        promoted: updateResult.nModified,
        notPromotedDueToMarks: ineligibleCount
      }
    });
  } catch (error) {
    console.error('Error promoting students:', error); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error' });
  }
};
