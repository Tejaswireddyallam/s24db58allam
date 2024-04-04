var express = require('express');
const heritagesite_controlers= require('../controllers/heritagesite');
var router = express.Router();
/* GET heritagesites */
router.get('/', heritagesite_controlers.heritagesite_view_all_Page );
module.exports = router;
