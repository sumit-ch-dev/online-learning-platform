const courses = require('./course/coursesRoute')
const auth = require('./user/authRoute')


const constructorMethod = (app) => {
    app.use('/api/courses', courses)
    app.use('/api/auth', auth);
}


module.exports = constructorMethod
