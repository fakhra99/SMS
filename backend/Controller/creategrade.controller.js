import CreateGrade from "../Model/creategrade.model.js";

// Create a new grade
export const createGrade = async (req, res) => {
    try {
        const { CreateClass } = req.body;
        const existingGrade = await CreateGrade.findOne({ CreateClass });
        if (existingGrade) {
            return res.status(401).json({ message: "This grade already exists" });
        }
        const newGrade = new CreateGrade({ CreateClass });
        await newGrade.save();
        res.status(201).json(newGrade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetch all grades
export const getGrades = async (req, res) => {
    try {
        const grades = await CreateGrade.find();
        res.status(200).json(grades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete a grade
export const deleteGrade = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedGrade = await CreateGrade.findByIdAndDelete(id);
        if (!deletedGrade) {
            return res.status(404).json({ message: "Grade not found" });
        }
        res.status(200).json({ message: "Grade deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update a grade
export const updateGrade = async (req, res) => {
    try {
        const { id } = req.params;
        const { CreateClass } = req.body;
        const updatedGrade = await CreateGrade.findByIdAndUpdate(id, { CreateClass }, { new: true });
        if (!updatedGrade) {
            return res.status(404).json({ message: "Grade not found" });
        }
        res.status(200).json(updatedGrade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
