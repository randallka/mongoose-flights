const Flight = require('../models/database');

module.exports = { 
index, 
new: newFlight, 
create,
show,
}

function show(req, res) { 
    Flight.findById(req.params.id, function(err, flightDoc) { 
        res.render('flights/show', {flight : flightDoc});
    })
}
function create(req, res) { 
    if (req.body.departs == "") { 
        req.body.departs = undefined
    }
    console.log(req.body);

    Flight.create(req.body, function(err, flightDoc) { 
        if(err) { 
            console.log(err); 
            return res.send("error please go back to the home page")
        }
        console.log(flightDoc); 
        res.redirect('/');
    })
}
function index(req, res) { 

    Flight.find({}, function(err, flightDocs){ 
        console.log(flightDocs)
        res.render('flights/index', {flights : flightDocs});
    })
}
function newFlight(req, res) { 
    res.render('flights/new');
}