const express = require('express');
const router = express.Router();

//get list of ninjas from DB
router.get('/ninjas', function (req, res) {
    res.send({type: 'GET'});
});

//add a new ninja to the DB
router.post('/ninjas', function (req, res) {
    res.send({type: 'POST'});
});

//update a ninja in the DB
router.put('/ninjas/:id', function (req, res) {
    res.send({type: 'PUT'});
});

//delete a ninja from the DB
router.delete('/ninjas/:id', function (req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;