const express = require('express')
const router = express.Router()
const { createCourses } = require('../../controller/courseController')

router.get('/', (req, res) => {
    const courses = [
        { id: 1, name: 'course1' },
        { id: 2, name: 'course2' },
        { id: 3, name: 'course3' },
    ]
    res.json(courses)
})

router.post('/', createCourses)


module.exports = router