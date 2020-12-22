var express = require('express');
var router = express.Router();
const navigation = require('../views/partials/navigation.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { navItems:navigation.items, title: 'Users', name: "world"});
});


module.exports = router;