const Flight = require('../models/database');

module.exports = { 
    create,
}

async function create(req, res) { 
  try {
    const flightDoc = await Flight.findById(req.params.id); 
    flightDoc.destinations.push(req.body); 
    flightDoc.save();
    res.redirect(`/flights/${req.params.id}`);
     } catch (err) { 
            console.log(err)
            res.send("error");
        }
}