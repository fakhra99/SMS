import Class from '../Model/classes.model.js';

export const createClass = async (req, res) => {
  const { className, section } = req.body;

  try {
    const existingClass = await Class.findOne({ className, section });
    if (existingClass) {
      return res.status(400).json({ message: 'Class already exists' });
    }

    const newClass = new Class({ className, section });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: 'Error creating class', error });
  }
};

export const getClass = async (req, res) => {
  const { id } = req.params;

  try {
    const classData = await Class.findById(id);
    if (!classData) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving class', error });
  }
};

export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving classes', error });
  }
};

export const countClasses = async (req, res) => {
  try {
    const classCount = await Class.countDocuments();
    res.status(200).json({ count: classCount });
  } catch (error) {
    res.status(500).json({ message: 'Error counting classes', error });
  }
};

export const deleteClass = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedClass = await Class.findByIdAndDelete(id);
    if (!deletedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting class', error });
  }
};

export const editClass = async (req, res) => {
  const { id } = req.params;
  const { className, section } = req.body;

  try {
    const updatedClass = await Class.findByIdAndUpdate(id, { className, section }, { new: true });
    if (!updatedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: 'Error updating class', error });
  }
};