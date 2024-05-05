import express, { Router } from 'express';
import { add, GetTeacherData, delTeacher, updateTeacher } from '../Controller/teacher.controller.js';

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

router.post("/addteacher", upload.single('Image'), add)
router.get("/allteachers", GetTeacherData)
router.delete("/delTeacher/:id", delTeacher)
router.put("/updateTeacher/:id", updateTeacher);

export default router;