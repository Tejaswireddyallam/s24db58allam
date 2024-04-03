const mongoose = require("mongoose")
const heritagesiteSchema = mongoose.Schema({
heritagesite_name: String,
location: String,
rating: Number
})
module.exports = mongoose.model("heritagesite", 
heritagesiteSchema)