import express from "express";

const app = express();

// Use the environment variable PORT if defined, otherwise use 4041
const PORT = process.env.PORT || 4041;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on this port: ${PORT}`);
});