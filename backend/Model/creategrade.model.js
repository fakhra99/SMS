import mongoose, { mongo } from "mongoose";

const gradeSchema = mongoose.Schema({

    CreateClass: {
        type: String
    }

})
const CreateGrade = mongoose.model("Grades", gradeSchema);
export default CreateGrade