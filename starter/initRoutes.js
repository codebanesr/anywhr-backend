const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const moviesRouter = require('../routes/movies');

module.exports = (app) => {
    app.use('/api/v1/', indexRouter);
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/movies', moviesRouter);    
}