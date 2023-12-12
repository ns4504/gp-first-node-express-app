var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Parent House', rating: 6 },
    { name: 'GrandParent House', rating: 9},
    { name: 'Church', rating: 7},
    { name: 'Comic Book Store', rating: 8},
    {name: 'ECPI', rating: 7}
  ];

  // create a name
  var myname = "Nathan Scott"

  res.render('index', { 
    title: 'Nathan Scott',
  places: places,
  myname: myname
  });
});

module.exports = router;
