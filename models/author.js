const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// tworzenie schematu i modelu opartego na tym schemacie

//schemat
const BookSchema = new Schema({
    title: String,
    pages: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books:[ BookSchema ]
});



//model
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
