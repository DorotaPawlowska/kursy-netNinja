// var counter = require('./count');
// var stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(6,5));
// console.log(stuff.adder(stuff.pi, 5));

var events = require('events');
var util = require('util');

// element.on('click', function () {
// })

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function (mssg) {
//    console.log(mssg);
// });
//
// myEmitter.emit('someEvent', 'the event was emitted');

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function (t) {
    t.on('speak', function (mssg) {
        console.log(t.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey Dudes');
ryu.emit('speak', 'i want a curry');
mary.emit('speak', 'heyah Dudeiis');
