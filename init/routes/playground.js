var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('playground', { title: 'Express' });
});

module.exports = router;