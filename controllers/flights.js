const Flight = require('../models/database');

module.exports = { 
index, 
new: newFlight, 

}

function index(req, res) { 
    res.render('flights/index');
}
function newFlight(req, res) { 
    res.render('flights/new');
}