const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('finding records', function () {

    beforeEach(function (done) {
        var char = new MarioChar({
            name: 'Mario'
        });
        // asynchroniczne - zwraca promisę dlatego .then
        char.save().then(function () {
            done();
        });
    });

    //create tests
    it('finds one record from the database', function (done) {

        MarioChar.findOne({name: 'Mario'}).then(function (result) {
            assert(result.name === 'Mario');
            done();
        });
    });
    //next test...
});
