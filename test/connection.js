var mongoose = require('mongoose');

//connect to MDB
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function () {
    console.log('connection has been made, whohoo!')
}).on('error', function (error) {
    console.log('connestion error: ', error);
});