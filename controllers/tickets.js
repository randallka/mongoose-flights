const Ticket = require('../models/ticket');
module.exports = { 
    create,
}
function create(req, res) { 
    Ticket.create(req.body, function(err, ticketDoc) { 
        if(err) { 
            console.log(err); 
            return res.send("error please go back to the home page")
        }
        ticketDoc.flight = req.params.id
        ticketDoc.save();
        console.log(ticketDoc); 
        res.redirect(`/flights/${req.params.id}`);
    })
}
