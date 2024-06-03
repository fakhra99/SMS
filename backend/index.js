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
import CalendarEvents from "./Route/calendar.route.js";
import Classes from "./Route/classes.route.js";
import promoteStudents from './Route/promoteStudents.route.js'; 
import assignCourseRoutes from './Route/courseAssignment.route.js';
import assignteacher from "./Route/assignteacher.route.js";

// Load environment variables from the .env file
dotenv.config();

// Enable CORS
app.use(cors());

//pecifies a base URL path ("/upload") that will be used to access the static files.
app.use("/upload",express.static("upload"))  

// Use bodyParser middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.use("/api", AdminSignup);
app.use("/api", AddStudent);
app.use("/api", Teachers);
app.use("/api", Course);
app.use("/api", Timetables);
app.use("/api", CalendarEvents);
app.use("/api", Classes);
app.use("/api", promoteStudents)
app.use("/api", assignCourseRoutes)
app.use('/api', assignteacher);

// Extract MongoDB credentials from environment variables
const username = process.env.USER;
const password = process.env.PASSWORD;

// console.log(username)
// console.log(password)

// Use the environment variable PORT if defined, otherwise use 4041
const PORT = process.env.PORT || 4041;

// Connect to MongoDB using mongoose
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5dlxc.mongodb.net/SMS`).then(() => {
    console.log("Success, Database connection established");
}).catch((error) => {
    console.error("Error connecting to the database:", error.message);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on this port: ${PORT}`);
});