var express = require('express');
const heritagesite_controlers= require('../controllers/heritagesite');
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
var router = express.Router();
/* GET heritagesites */
router.get('/', heritagesite_controlers.heritagesite_view_all_Page );
//router.get('/heritagesite/:id', heritagesite_controlers.heritagesite_detail);
/* GET detail costume page */
router.get('/detail', heritagesite_controlers.heritagesite_view_one_Page);
router.get('/create',secured, heritagesite_controlers.heritagesite_create_Page);
//router.get('/update', heritagesite_controlers.heritagesite_update_Page);
router.get('/update', secured, heritagesite_controlers.heritagesite_update_Page);
router.get('/delete', secured,heritagesite_controlers.heritagesite_delete_Page);


module.exports = router;
