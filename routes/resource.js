var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var heritagesite_controller = require('../controllers/heritagesite');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// heritagesite ROUTES ///
// POST request for creating a heritagesite. 
router.post('/heritagesite', heritagesite_controller.heritagesite_create_post);
// DELETE request to delete heritagesite.
router.delete('/heritagesite/:id', heritagesite_controller.heritagesite_delete);
// PUT request to update heritagesite.
router.put('/heritagesite/:id', heritagesite_controller.heritagesite_update_put);
// GET request for one heritagesite.
router.get('/heritagesite/:id', heritagesite_controller.heritagesite_detail);
// GET request for list of all heritagesite items.
router.get('/heritagesite', heritagesite_controller.heritagesite_list);
module.exports = router;