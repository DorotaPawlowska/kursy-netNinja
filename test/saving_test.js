const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('saving records', function () {

    //create tests
    it('saves record to the database', function (done) {

        var char = new MarioChar({
            name: 'Mario'
        });
        // asynchroniczne - zwraca promisę dlatego .then
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });
    //next test...
});
