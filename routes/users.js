var express = require('express');
var router = express.Router();

const stub = [
  {id: 1, name: 'すみだいっぺい', hobby: 'ペン回し'},
  {id: 2, name: 'たなかともき', hobby: 'スキー'}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(stub);
});

router.get('/:id', function(req, res, next) {
  for (let i in stub) {
    if (Number(req.params.id) === stub[i].id) return res.send(stub[i]);
  }
  return next(new Error('user is not exist'));
});

module.exports = router;
