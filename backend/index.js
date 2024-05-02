import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express();
import AdminSignup from "./Route/adminsignup.route.js"
import bodyParser from "body-parser";


// Load environment variables from the .env file
dotenv.config();

// Use bodyParser middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.use("/api", AdminSignup);

// Extract MongoDB credentials from environment variables
const username = process.env.USER;
const password = process.env.PASSWORD;

console.log(username)
console.log(password)

// Use the environment variable PORT if defined, otherwise use 4041
const PORT = process.env.PORT || 4041;

// Connect to MongoDB using mongoose
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5dlxc.mongodb.net/SMS`).then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.error("Error connecting to the database:", error.message);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on this port: ${PORT}`);
});