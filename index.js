const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

const port = 8000;
// on line server the port is 80

const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const { disable } = require('express/lib/application');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash')





app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set('layout extraStyles', true);
app.set('layout extractScripts', true);



//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//mongo store is used to store the session cookie in the db
app.use(session({
    name: 'Codial',
    //TODO change the secret before deploymnet in production mode
    secret: 'Blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongoDB setup ok')
        }
    )
}));

// app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));




app.listen(port, function(err){
    if (err){
        console.log('There is an Error', err);

        // interpolation
        // console.log('Error in running the server: ${err}');

    }

    // console.log('Server is running on port: ${port}');

    console.log('Server is running on port:', port);
});
