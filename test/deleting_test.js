const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('deleting records', function () {

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
    it('deletes one record from the database', function (done) {

        MarioChar.findOneAndRemove({name: 'Mario'}).then(function (result) {
            MarioChar.findOne({name: 'Mario'}).then(function (result) {
                assert(result === null);
                done();
            });
        });
    });


    //next test...
});
