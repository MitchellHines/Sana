var express = require('express');
var router = express.Router();

/* Renders Recipe view */
router.get('/', function(req, res) {
  res.render('media', { title: 'Express' });
});

module.exports = router;