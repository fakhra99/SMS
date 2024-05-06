import Student from "../Model/student.model.js"

// register student
export const register = async(req,res) =>{

    try{
        console.log("called");
        const{studentID, Name, Dob, ClassSection, GrNumber, RollNo, Gender, AdmissionDate, GuardiansEmail, GuardianGender, GuardianMobile} = req.body
        const existingStd = await Student.findOne({studentID});
        if (existingStd) {
            return res.status(401).json({ message: "This student already exists"})
        }
        const newStudent = new Student({
            studentID, 
            Name, 
            Dob, 
            Image: req.file ? req.file.filename : undefined,
            ClassSection, 
            GrNumber, 
            RollNo, 
            Gender, 
            AdmissionDate, 
            GuardiansEmail, 
            GuardianGender, 
            GuardianMobile });
        await newStudent.save()
        res.status(201).json(newStudent)
     } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fetch students data
export const getStudentsData = async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).json({ studentsData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};

// delete
export const delStudent=async(req,res)=>{
    try{
const {id}=req.params;
const std=await Student.findOneAndDelete({_id:id})
if(!std){
    return res.json({status:404,message:"Couldn't find student",success:false})
}
res.json({status:200,message:"student deleted",success:true})
    }
    catch(err){
        console.log(err)
    }
}

// update
export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        // Update the student document
        const std = await Student.findOneAndUpdate({ _id: id }, payload, { new: true });

        // Check if the student was found and updated successfully
        if (!std) {
            return res.status(404).json({ status: 404, message: "Student not found", success: false });
        }

        // If the student was found and updated successfully, send the updated student data in the response
        res.json({ status: 200, message: "Student updated", success: true, std });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
}
