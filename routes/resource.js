var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var heritagesite_controller = require('../controllers/heritagesite');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/heritagesite', heritagesite_controller.heritagesite_create_post);
// DELETE request to delete Costume.
router.delete('/heritagesite/:id', heritagesite_controller.heritagesite_delete);
// PUT request to update Costume.
router.put('/heritagesite/:id', heritagesite_controller.heritagesite_update_put);
// GET request for one Costume.
router.get('/heritagesite/:id', heritagesite_controller.heritagesite_detail);
// GET request for list of all Costume items.
router.get('/heritagesite', heritagesite_controller.heritagesite_list);
module.exports = router;