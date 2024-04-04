var heritagesite = require('../models/heritagesite');
// List of all Costumes
exports.heritagesite_list = async function(req, res) {
    try {
        const theheritagesite = await heritagesite.find();
        res.send(theheritagesite);
    } catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.heritagesite_view_all_Page = async function(req, res) {
    try{
    theheritagesite = await heritagesite.find();
    res.render('heritagesite', { title: 'Heritagesite Search Results', results: theheritagesite });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// for a specific Costume.
exports.heritagesite_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Heritagesite detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.heritagesite_create_post = async function(req, res) {
    console.log(req.body)
    let document = new heritagesite();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.heritagesite_name= req.body.heritagesite_name;
    document.location = req.body.location;
    document.rating = req.body.rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
// Handle Costume delete from on DELETE.
exports.heritagesite_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Heritagesite delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.heritagesite_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Heritagesite update PUT' + req.params.id);
};
