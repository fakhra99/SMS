// const express = require("express");
import express from 'express';
import { signup, signin} from '../Controller/userControllers.js';
const userRouter = express.Router();

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

export default userRouter;
    
