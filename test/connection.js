var mongoose = require('mongoose');

//es6 promises
mongoose.Promise = global.Promise;

//connect to the database before tests run
before(function (done) {

    //connect to MDB
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function () {
        console.log('connection has been made, whohoo!');
        done();
    }).on('error', function (error) {
        console.log('connestion error: ', error);
    });
});

//drop the collection before each test - delete
beforeEach(function (done) {
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    })
});

