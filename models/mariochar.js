const mognoose = require('mongoose');
const Schema = mongoose.Schema;

// tworzenie schematu i modelu opartego na tym schemacie

//schemat
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//model
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
