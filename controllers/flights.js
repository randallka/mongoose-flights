const Flight = require('../models/database');
const Ticket = require('../models/ticket');

module.exports = { 
index, 
new: newFlight, 
create,
show,
}

async function show(req, res) { 
    try {
        const flightDoc = await Flight.findById(req.params.id); 
        const tickets = await Ticket.find({flight: flightDoc._id}); 
        res.render('flights/show', {flight : flightDoc, tickets : tickets});
    } catch (err) { 
        console.log(err); 
        res.send('error');
    }
}
async function create(req, res) { 
    try { 
        if (req.body.departs == "") { 
            req.body.departs = undefined
        } const flightDoc = await Flight.create(req.body); 
        res.redirect('/');
    } catch (err) { 
        console.log(err); 
        res.send('error');
    }
}
async function index(req, res) { 
    try { 
        const flightDocs = await Flight.find({});
        currentDate = new Date();
        res.render('flights/index', {flights : flightDocs, date : currentDate});
    } catch (err) { 
        console.log(err); 
        res.send('error')
    }
}
function newFlight(req, res) { 
    const newFlight = new Flight(); 
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {defaultDate : departsDate});
}