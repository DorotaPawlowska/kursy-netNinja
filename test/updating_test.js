const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('updating records', function () {

    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: 'Mario'
        });
        // asynchroniczne - zwraca promisę dlatego .then
        char.save().then(function () {
            done();
        });
    });

    //create tests
    it('updates one record from the database', function (done) {

       MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function () {
           MarioChar.findOne({_id: char._id}).then(function (result) {
               assert(result.name === 'Luigi');
               done();
           });
       });
    });


    //next test...
});
