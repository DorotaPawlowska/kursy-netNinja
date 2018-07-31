var  express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('this is the home page');
});

app.get('/contact', function (req, res) {
    res.send('this is the contact page');
});

app.get('/profile/:name', function (req, res) {
    res.send('you req to see profile with the name of ' + req.params.name);
});

app.listen(3000);



