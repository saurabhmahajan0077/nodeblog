var express = require('express');
var router = express.Router();

/* GET add post page. */
router.get('/add', function(req, res, next) {
    res.render('addpost');
});

router.post('/add', function(req, res, next) {

    var title = req.body.title;

    var body = req.body.body;

});
module.exports = router;
