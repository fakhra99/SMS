import Student from '../Model/student.model.js';
import Class from '../Model/classes.model.js';

export const promoteStudents = async (req, res) => {
  const { currentClassId, nextClassId } = req.body;

  try {
    // Validate existence of specified classes
    const currentClass = await Class.findById(currentClassId);
    const nextClass = await Class.findById(nextClassId);

    if (!currentClass || !nextClass) {
      console.log('One or both specified classes not found');
      return res.status(404).json({ message: 'One or both specified classes not found' });
    }

    // Fetch all students in the current class
    const allStudentsInClass = await Student.find({ Class: currentClassId });
    if (allStudentsInClass.length === 0) {
      console.log('No students found in the current class');
      return res.status(404).json({ message: 'No students found in the current class' });
    }

    // Filter students who meet the marks criteria
    const eligibleStudents = allStudentsInClass.filter(student => student.Percentage >= 50);
    console.log('Eligible students:', eligibleStudents);

    // Promote eligible students
    const eligibleStudentIds = eligibleStudents.map(student => student._id);
    const updateResult = await Student.updateMany(
      { _id: { $in: eligibleStudentIds } },
      { Class: nextClassId }
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
    console.error('Error during promotion:', error);
    res.status(500).json({ message: error.message });
  }
};
