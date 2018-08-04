const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to monogo DB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes-trasy
app.use('/api', require('./routes-trasy/api'));

//error handling middleware
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message});
});

//listen for requests
app.listen( process.env.port || 4000, function () {
    console.log('hey we are ready for your requests on port 4000 or so')
});

