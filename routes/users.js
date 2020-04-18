var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const names = [
    {
      name: 'LakshmiNarasimham Bandaru',
      village: 'Ongole'
    },
    {
      name: 'AmruthaValli Bandaru',
      village: 'Hyderabad'
    },
  ]
  res.send(names);
});

router.post('/', function(req, res, next) {
  const name = req.body;
  const names = [
    {
      name: 'LakshmiNarasimham Bandaru',
      village: 'Ongole'
    },
    {
      name: 'AmruthaValli Bandaru',
      village: 'Hyderabad'
    },
  ]
  names.push(name);
  res.send(names);
});

module.exports = router;
