var express = require('express');
var router = express.Router();

/* Renders Recipe view */
router.get('/donate', function(req, res) {
  res.render('donate', { title: 'Donate' });
});

module.exports = router;