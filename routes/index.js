var express = require('express');
var router = express.Router();
const navigation = require('../views/partials/navigation.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navItems:navigation.items, title: 'Express'});
});

module.exports = router;
