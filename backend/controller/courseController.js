// Import the Course model
const Course = require('../models/courseModel');

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
        console.log(req.body)
        const {title, description, instructor, price, duration, students} = req.body
        console.log(req.body)
        // Create a new course using the Course model and the data sent in the request body
        const course = await Course.create({
            title,
            description,
            instructor,
            price,
            duration,
            students
        })

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
