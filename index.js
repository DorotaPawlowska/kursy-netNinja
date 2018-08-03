const express = require('express');

//set up express app
const app = express();

app.get('/api', function (req, res) {
    console.log('GET req');
    res.send({name: 'yoshi'});
});





//listen for requests
app.listen( process.env.port || 4000, function () {
    console.log('hey we are ready for your requests on port 4000 or so')
});

