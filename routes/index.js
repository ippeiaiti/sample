var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    subTitle: 'First Express Sample'
  });
});

router.post('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    subTitle: 'First Express Sample',
    message: req.body.message
  });
});

module.exports = router;
