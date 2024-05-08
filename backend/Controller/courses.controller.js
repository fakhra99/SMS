import Courses from "../Model/courses.model.js";

// courses register
export const registerCourse = async (req, res) => {

    try {
        console.log("Called")
        const {course_code, course_Title, course_Type} = req.body
        const existingCourse = await Courses.findOne({ course_code });
        if (existingCourse) {
            return res.status(401).json({ message: "Course Already exists" });
        }
        const newCourse = new Courses({course_code, course_Title, course_Type});
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fetch courses data
export const getCoursesData = async (req, res) => {
  try {
    const coursesData = await Courses.find();
    res.status(200).json({ coursesData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};

// delete
export const delCourse=async(req,res)=>{
    try{
const {id}=req.params;
const crs=await Courses.findOneAndDelete({_id:id})
if(!crs){
    return res.json({status:404,message:"Couldn't find course",success:false})
}
res.json({status:200,message:"course deleted",success:true})
    }
    catch(err){
        console.log(err)
    }
}

// update
export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        // Update the Teacher document
        const Crs = await Courses.findOneAndUpdate({ _id: id }, payload, { new: true });

        // Check if the Teacher was found and updated successfully
        if (!Crs) {
            return res.status(404).json({ status: 404, message: "Course not found", success: false });
        }

        // If the teacher was found and updated successfully, send the updated student data in the response
        res.json({ status: 200, message: "Course updated", success: true, Crs });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
}

// Fetch total number of courses
export const getCoursesCount = async (req, res) => {
  try {
    const count = await Courses.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};