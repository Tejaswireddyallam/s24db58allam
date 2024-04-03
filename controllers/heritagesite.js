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

// for a specific Costume.
exports.heritagesite_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Heritagesite detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.heritagesite_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Heritagesite create POST');
};
// Handle Costume delete from on DELETE.
exports.heritagesite_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Heritagesite delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.heritagesite_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Heritagesite update PUT' + req.params.id);
};
