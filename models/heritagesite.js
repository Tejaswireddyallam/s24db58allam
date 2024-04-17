//const mongoose = require("mongoose")
//const heritagesiteSchema = mongoose.Schema({
//heritagesite_name: String,
//location: String,
//rating: Number
//})
//module.exports = mongoose.model("heritagesite", 
//heritagesiteSchema)
const mongoose = require("mongoose");

const heritagesiteSchema = mongoose.Schema({
    heritagesite_name: {
        type: String,
        required: true, // Ensure the field is required
        minlength: [3, 'Heritage site name must be at least 3 characters'], 
        maxlength: [15, 'Heritage site name must be at most 15 characters'], 
        trim: true // Trim whitespace from the input
    },
    location: {
        type: String,
        required: true,
        minlength: [3, 'Location must be at least 3 characters'],
        maxlength: [10, 'Location must be at most 10 characters'],
        trim: true
    },
    rating: {
        type: Number,
       // min: [0, 'Rating must be at least 0'], 
       //max: [10, 'Rating must be at most 10'], 
       //required: true
    }
});

module.exports = mongoose.model("HeritageSite", heritagesiteSchema);

