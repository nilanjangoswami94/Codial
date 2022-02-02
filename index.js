const express = require('express');

const app = express();

const port = 8000;
// on line server the port is 80

const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');



app.use(express.static('./assets'));

app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set('layout extraStyles', true);
app.set('layout extractScripts', true);

// use express as router
app.use('/', require('./routes'))

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err){
    if (err){
        console.log('There is an Error', err);

        // interpolation
        // console.log('Error in running the server: ${err}');

    }

    // console.log('Server is running on port: ${port}');

    console.log('Server is running on port:', port);
});
