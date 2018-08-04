const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get list of ninjas from DB
router.get('/ninjas', function (req, res, naxt) {
    res.send({type: 'GET'});
});

//add a new ninja to the DB
router.post('/ninjas', function (req, res, next) {
    // console.log(req.body);

    // tworzenie normalne
    // var ninja = new Ninja(req.body);
    // ninja.save();
    //tworzenie za pomocą mongoose
    Ninja.create(req.body).then(function (ninja) {// zwraca Promise
        res.send(ninja);
    }).catch(next);
});

//update a ninja in the DB
router.put('/ninjas/:id', function (req, res, next) {
    res.send({type: 'PUT'});
});

//delete a ninja from the DB
router.delete('/ninjas/:id', function (req, res, next) {
    res.send({type: 'DELETE'});
});

module.exports = router;
