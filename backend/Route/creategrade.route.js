import express from 'express';
import { createGrade, getGrades, deleteGrade, updateGrade } from '../Controller/creategrade.controller.js';

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

router.post("/creategrade", createGrade);
router.get("/grades", getGrades);
router.delete("/grades/:id", deleteGrade);
router.put("/grades/:id", updateGrade);

export default router;