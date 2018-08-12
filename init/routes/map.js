var express = require('express');
var router = express.Router();

/* Renders Recipe view */
router.get('/map', function(req, res) {
  res.render('map', { title: 'Map' });
});

module.exports = router;