import Assignteacher from '../Model/assignteacher.model.js';

export const createAssignment = async (req, res) => {
    try {
      const { teacher, class: className, subject } = req.body;
      const newAssignment = new Assignteacher({ teacher, class: className, subject });
      await newAssignment.save();
      res.status(201).json(newAssignment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getAssignments = async (req, res) => {
    try {
      const assignments = await Assignteacher.find();
      res.status(200).json(assignments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const updateAssignment = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedAssignment = await Assignteacher.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedAssignment) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
      res.status(200).json(updatedAssignment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteAssignment = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAssignment = await Assignteacher.findByIdAndDelete(id);
      if (!deletedAssignment) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
      res.status(200).json({ message: 'Assignment deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  