var express = require('express');
var router = express.Router();

router.get('/timmy', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.get('/john', function(req, res, next) {
  res.json({users: [{name: 'John'}]});
});

module.exports = router;