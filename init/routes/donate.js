var express = require('express');
var router = express.Router();

/* Renders Recipe view */
router.get('/', function(req, res) {
  res.render('donate', { title: 'Express' });
});

module.exports = router;