var async = require('async');

module.exports = function(app) {

    var storyId = 'arab_spring';

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);
    app.get('/:storyId', function(req, res) {
        index.render(req, res);
    }); 
    app.get('/map', index.map);
        //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
        app.use(function(err, req, res, next) {
            //Treat as 404
            if (~err.message.indexOf('not found')) return next();

            //Log it
            console.error(err.stack);

            //Error page
            res.status(500).render('500', {
                error: err.stack
            });
        });

        //Assume 404 since no middleware responded
        app.use(function(req, res, next) {
            res.status(404).render('404', {
                url: req.originalUrl,
                error: 'Not found'
            });
        });
};
