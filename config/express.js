/**
 * Module dependencies.
 */
var express = require('express'),
    //mongoStore = require('connect-mongo')(express),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    config = require('./config'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    compression = require('compression');

module.exports = function(app) {
    app.set('showStackError', true);

    //Should be placed before express.static
    app.use(compression({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    //Setting the fav icon and static folder
app.use(favicon(config.root + '/public/favicon.ico'));
    app.use(express.static(config.root + '/public'));
    app.use('/lib', express.static(config.root + '/app/components'));

    //Don't use logger for test env
    if (process.env.NODE_ENV !== 'test') {
        app.use(morgan('dev'));
    }

    //Set views path, template engine and default layout
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');

    //Enable jsonp
    app.enable("jsonp callback");

//    app.configure(function() {
        //cookieParser should be above session
        app.use(cookieParser());

        //bodyParser should be above methodOverride
        app.use(bodyParser());
        app.use(methodOverride());

        //express/mongo session storage
        app.use(session({secret: 'MEAN'}));

        //connect flash for flash messages
        app.use(flash());

        //dynamic helpers
        app.use(helpers(config.app.name));


    //});
};
