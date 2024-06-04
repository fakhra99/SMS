import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
import AdminSignup from "./Route/adminsignup.route.js";
import bodyParser from "body-parser";
import AddStudent from "./Route/student.route.js";
import Teachers from "./Route/teacher.route.js";
import Course from "./Route/courses.route.js";
import Timetables from "./Route/timetable.route.js";
import Student from "./Model/student.model.js"; // Import the student model

dotenv.config();
app.use(cors());
app.use("/upload", express.static("upload"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", AdminSignup);
app.use("/api", AddStudent);
app.use("/api", Teachers);
app.use("/api", Course);
app.use("/api", Timetables);

const username = process.env.USER;
const password = process.env.PASSWORD;
const PORT = process.env.PORT || 4041;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5dlxc.mongodb.net/SMS`).then(async () => {
    console.log("Success, Database connection established");

    // Add initial data if collection is empty
    const count = await Student.countDocuments();
    if (count === 0) {
        await Student.insertMany([
            {
                studentID: "1",
                Name: "John Doe",
                Dob: new Date("1999-05-15"),
                Image: "",
                ClassSection: "1A",
                GrNumber: 1234,
                RollNo: 1,
                Gender: "Male",
                AdmissionDate: new Date("2022-01-01"),
                GuardiansEmail: "john@example.com",
                GuardianGender: "Male",
                GuardianMobile: "+1234567890"
            },
            // Add more students as needed
        ]);
        console.log("Initial data added");
    }
}).catch((error) => {
    console.error("Error connecting to the database:", error.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on this port: ${PORT}`);
});
