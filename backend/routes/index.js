const courses = require('./coursesRoute')


const constructorMethod = (app) => {
    app.use('/api/courses', courses)
}


module.exports = constructorMethod
