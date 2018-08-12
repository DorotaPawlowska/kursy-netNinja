const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('updating records', function () {

    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
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

    it('increments the weight by 1 in the DB', function (done) {

       MarioChar.update({}, {$inc: {weight: 1} }).then(function () {
           MarioChar.findOne({name: 'Mario'}).then(function (result) {
               assert(result.weight === 51);
               done();
           });
       });
    });
    //next test...
});
