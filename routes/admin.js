var express = require('express');
var router = express.Router();

/* GET Admin home page. */
router.get('/', function (req, res, next) {
    res.render("admin", {app: "admin"});
});

module.exports = router;