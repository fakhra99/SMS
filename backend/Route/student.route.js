import express, { Router } from 'express';
import { register, getStudentsData, delStudent, update, countStudents, getGenderDistribution } from '../Controller/student.controller.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// specifies how files should be stored on the disk.
const storage=multer.diskStorage({
    //cb (callback) function provided by multer: control the file storage process,the destination directory and the filename.
    destination:(req, file , cb)=>{  
        cb(null, "upload/")
    },
    filename:(req, file , cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage
})

router.post("/addStudent", upload.single('Image'), register)
router.get("/allStudents", getStudentsData)
router.delete("/delStudent/:id", delStudent)
router.put("/update/:id", update);
router.get("/countStudents", countStudents);

router.get('/students/gender-distribution', getGenderDistribution);
export default router;