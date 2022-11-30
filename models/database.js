const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({ 
    content: String, 
    airport: { 
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
    }, 
    arrival: { 
        type: Date,
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Delta', 'Southwest', 'United'],
        
    }, 
    airport: { 
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    }, 
    flightNo: {
        type: Number, 
        min: 0, 
        max: 9999,
    },
    departs: {
        type: Date, 
        default: function() { 
            const d = new Date();
            d.setFullYear(d.getFullYear() + 1);
            return d;
        },
    },
    destinations: [destinationSchema],
  });

  module.exports = mongoose.model('Flight', flightSchema);
