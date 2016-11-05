const express = require('express');
const router = express.Router();
const rp = require('request-promise');

router.get('/', function (req, res, next) {
  rp('http://cansell.jp/terms')
  .then(value => res.send(value))
  .catch(err => next(err));
});

module.exports = router;
