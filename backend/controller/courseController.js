// Import the Course model
const Course = require('../models/Course');

// Define the controller function for getting all courses
const getAllCourses = async (req, res) => {
    try {
        // Find all courses in the database
        const courses = await Course.find();

        // Return the courses as a response
        res.status(200).json(courses);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: error.message });
    }
};


const createCourses = async (req, res) => {
    try {
        // Create a new course using the Course model and the data sent in the request body
        const course = await Course.create(req.body);

        // Return the newly created course as a response
        res.status(201).json(course);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: error.message });
    }
}

// Export the controller function
module.exports = {
    getAllCourses,
    createCourses
};
