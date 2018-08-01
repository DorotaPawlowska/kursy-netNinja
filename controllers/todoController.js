var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the DB
mongoose.connect('mongodb://test:malgosia4@ds263571.mlab.com:63571/todo');

//create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item: 'get flowers'}).save(function (err) {
//     if(err) throw err;
//     console.log('item saved');
// });

// var data = [{item: 'get milk'},{item: 'walk the dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo', function (req, res) {
        // get data from mongoDB and pass it to view
        Todo.find({}, function (err, data) {// new data - from DB
            if(err) throw err;
            res.render('todo', {todos: data});
        }); //all items in collection
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        //get data from view and add it to mongoDB
        var newTodo = Todo(req.body).save(function (err, data) {
            if(err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function (req, res) {
        // delete the requested item from mogoDB
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if(err) throw err;
            res.json(data);
        });
    });
};