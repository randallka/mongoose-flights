const Flight = require('../models/database');

module.exports = { 
    create,
    // delete: deleteDestination,
}

// function deleteDestination(req, res) { 
//     console.log("you are trying to delete thsi")
//     res.redirect(`/flights/${req.params.id}`, );
// }
function create(req, res) { 
    console.log(req.body);
    console.log(req.params.id);


    Flight.findById(req.params.id, function(err, flightDoc){ 

        if(err) { 
            console.log(err)
            return res.send("error");
        }
        console.log(flightDoc);
        flightDoc.destinations.push(req.body);
        flightDoc.save(function(err) { 
            res.redirect(`/flights/${req.params.id}`, ); 
        });
    });
}