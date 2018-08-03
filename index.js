const express = require('express');

//set up express app
const app = express();

// initialize routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen( process.env.port || 4000, function () {
    console.log('hey we are ready for your requests on port 4000 or so')
});

