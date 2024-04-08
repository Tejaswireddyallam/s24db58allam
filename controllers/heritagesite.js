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
//exports.heritagesite_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: Heritagesite detail: ' + req.params.id);
//};
exports.heritagesite_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await heritagesite.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
//exports.heritagesite_delete = function(req, res) {
 //res.send('NOT IMPLEMENTED: Heritagesite delete DELETE ' + req.params.id);
//};
exports.heritagesite_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await heritagesite.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   
// Handle Costume update form on PUT.
//exports.heritagesite_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: Heritagesite update PUT' + req.params.id);
//};
exports.heritagesite_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await heritagesite.findById( req.params.id)
    // Do updates of properties
    if(req.body.heritagesite_name) 
    toUpdate.heritagesite_name = req.body.heritagesite_name;
    if(req.body.location) toUpdate.location = req.body.location;
    if(req.body.rating) toUpdate.rating = req.body.rating;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
   };

   // Handle a show one view with id specified by query
exports.heritagesite_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await heritagesite.findById( req.query.id)
    res.render('heritagesitedetail', 
   { title: 'Heritagesite Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
