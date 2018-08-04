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
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
        Ninja.findOne({_id: req.params.id}).then(function (ninja) {
            res.send(ninja);
    })
});

//delete a ninja from the DB
router.delete('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function (ninja) {
            res.send(ninja);
        })
    })
});

module.exports = router;
