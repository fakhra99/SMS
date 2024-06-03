import Assignteacher from '../Model/assignteacher.model.js';

export const createteacher = async (req, res) => {
  try {
    const { First_Name, class: className, subject } = req.body; 
    const newAssignment = new Assignteacher({ First_Name, class: className, subject });
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
  export const getteacher = async (req, res) => {
    try {
      const assignments = await Assignteacher.find();
      res.status(200).json(assignments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const updateteacher = async (req, res) => {
    try {
      const { id } = req.params;
      const updateteacher = await Assignteacher.findByIdAndUpdate(id, req.body, { new: true });
      if (!updateteacher) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
      res.status(200).json(updateteacher);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteteacher = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedteacher = await Assignteacher.findByIdAndDelete(id);
      if (!deletedteacher) {
        return res.status(404).json({ message: 'Assign not found' });
      }
      res.status(200).json({ message: 'Assig teacher deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  