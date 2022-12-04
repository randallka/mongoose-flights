const Ticket = require('../models/ticket');
module.exports = { 
    create,
}
async function create(req, res) { 
try { const ticketDoc = await Ticket.create(req.body); 
    ticketDoc.flight = req.params.id
        ticketDoc.save(); 
        res.redirect(`/flights/${req.params.id}`);
    } catch (err) { 
        console.log(err) ;
        res.send('errror');
    }
}
