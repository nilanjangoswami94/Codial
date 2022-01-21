const express = require('express');

const app = express();

const port = 8000;
// on line server the port is 80

// use express as router
app.use('/', require('./routes'))


app.listen(port, function(err){
    if (err){
        console.log('There is an Error', err);

        // interpolation
        // console.log('Error in running the server: ${err}');

    }

    // console.log('Server is running on port: ${port}');

    console.log('Server is running on port:', port);
});
