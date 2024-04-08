var express = require('express');
const heritagesite_controlers= require('../controllers/heritagesite');
var router = express.Router();
/* GET heritagesites */
router.get('/', heritagesite_controlers.heritagesite_view_all_Page );
//router.get('/heritagesite/:id', heritagesite_controlers.heritagesite_detail);
/* GET detail costume page */
router.get('/detail', heritagesite_controlers.heritagesite_view_one_Page);
module.exports = router;
