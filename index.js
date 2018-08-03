const express = require('express');
const bodyParser = require('body-parser');

//set up express app
const app = express();

app.use(bodyParser.json());

// initialize routes-trasy
app.use('/api', require('./routes-trasy/api'));

//listen for requests
app.listen( process.env.port || 4000, function () {
    console.log('hey we are ready for your requests on port 4000 or so')
});

