const Flight = require('../models/database');
const Ticket = require('../models/ticket');

module.exports = { 
index, 
new: newFlight, 
create,
show,
}

function show(req, res) { 
    Flight.findById(req.params.id, function(err, flightDoc) { 
        console.log(flightDoc);
        Ticket.find({flight: flightDoc._id}, function(err, tickets) {
            console.log(tickets);
            res.render('flights/show', {flight : flightDoc, tickets : tickets});
        });
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
        currentDate = new Date();
        res.render('flights/index', {flights : flightDocs, date : currentDate});
    })
}
function newFlight(req, res) { 
    const newFlight = new Flight(); 
// Obtain the default date
    const dt = newFlight.departs;
// Format the date for the value attribute of the input
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {defaultDate : departsDate});
}