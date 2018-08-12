const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//describe tests
describe('nesting records', function () {

    beforeEach(function (done) {
        mongoose.connection.collections.authors.drop(function () {
            done();
        });
    });

    //create test
    it('creates an author with sub-documents', function (done) {

        var pat = new Author({
            name: 'Patric Rothfuss',
            books: [{title: 'Name of the wind', pages: 400}]
        });

        pat.save().then(function () {
            Author.findOne({name: 'Patric Rothfuss'}).then(function (result) {
                assert(result.books.length === 1);
                done();
            });
        });
    });

    it('adds a book to an author', function (done) {

        var pat = new Author({
            name: 'Patric Rothfuss',
            books: [{title: 'Name of the wind', pages: 400}]
        });

        pat.save().then(function () {
            Author.findOne({name: 'Patric Rothfuss'}).then(function (result) {
                // add a book to the book array
                 result.books.push({title: "Wise man's fear", page: 500});
                 result.save().then(function () {
                     Author.findOne({name: 'Patric Rothfuss'}).then(function (result) {
                         assert(result.books.length === 2);
                         done();
                     });
                 });
            });
        });

    });

});