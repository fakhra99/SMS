import Fee from '../Model/assignfee.model.js';
import Class from '../Model/classes.model.js'; // Import the Class model

// Create a new fee assignment
export const assignFee = async (req, res) => {
  const { classId, feeAmount } = req.body; 
  if (!classId || !feeAmount) {
    return res.status(400).send('Class and fee amount are required');
  }

  try {
    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      return res.status(404).send('Class not found');
    }

    const newFee = new Fee({ classId, feeAmount }); 
    await newFee.save();
    res.status(201).send('Fee assigned successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const getFees = async (req, res) => {
  try {
    const fees = await Fee.find().populate('classId'); // populate class details
    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const fee = await Fee.findById(id).populate('classId'); // populate class details
    if (!fee) {
      return res.status(404).json({ message: 'Fee not found' });
    }
    res.status(200).json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update a specific fee assignment
export const updateFee = async (req, res) => {
  const { id } = req.params;
  const { classId, feeAmount } = req.body; // Extract classId and feeAmount from request body

  if (!classId || !feeAmount) {
    return res.status(400).send('Class and fee amount are required');
  }

  try {
    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      return res.status(404).send('Class not found');
    }

    const fee = await Fee.findById(id);
    if (!fee) {
      return res.status(404).send('Fee not found');
    }

    fee.class = classId;
    fee.feeAmount = feeAmount;
    await fee.save();
    res.status(200).send('Fee updated successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFee = async (req, res) => {
  try {
    // Find and delete the fee, and populate the 'class' field
    const fee = await Fee.findByIdAndDelete(req.params.id).populate('Class');

    if (!fee) {
      return res.status(404).json({ message: 'Fee not found' });
    }

    res.status(200).json({ message: 'Fee deleted successfully' });
  } catch (error) {
    console.error('Error deleting fee:', error);
    // res.status(500).json({ message: 'Internal server error' });
  }

};
