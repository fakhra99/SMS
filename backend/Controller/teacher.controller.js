import Teacher from "../Model/teacher.model.js"

// add teacher
export const add = async(req,res) =>{

    try{
        console.log("called");
        const{First_Name, Last_Name, Email, Dob, Mobile_No, Qualification, Address, Salary,Status, Gender} = req.body
        const existingTeacher= await Teacher.findOne({Email});
        if (existingTeacher) {
            return res.status(401).json({ message: "This teacher already exists"})
        }
        const newTeacher = new Teacher({
            First_Name, 
            Last_Name, 
            Email,
            Dob, 
            Mobile_No,
            Image: req.file ? req.file.filename : undefined,
            Qualification, 
            Address, 
            Salary, 
            Status, 
            Gender });
        await newTeacher.save()
        res.status(201).json(newTeacher)
     } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fetch students data
export const GetTeacherData = async (req, res) => {
  try {
    const teachersData = await Teacher.find();
    res.status(200).json({ teachersData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};

// delete
export const delTeacher=async(req,res)=>{
    try{
const {id}=req.params;
const tchr=await Teacher.findOneAndDelete({_id:id})
if(!tchr){
    return res.json({status:404,message:"Couldn't find teacher",success:false})
}
res.json({status:200,message:"teacher deleted",success:true})
    }
    catch(err){
        console.log(err)
    }
}

// update
export const updateTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        // Update the Teacher document
        const tchr = await Teacher.findOneAndUpdate({ _id: id }, payload, { new: true });

        // Check if the Teacher was found and updated successfully
        if (!tchr) {
            return res.status(404).json({ status: 404, message: "Teacher not found", success: false });
        }

        // If the teacher was found and updated successfully, send the updated student data in the response
        res.json({ status: 200, message: "Teacher updated", success: true, tchr });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
}