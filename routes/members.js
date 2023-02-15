var express = require('express');
var router = express.Router();

let dbOfMembers = [];

/* GET mob listing. */
router.get('/', function(req, res, next) {
  res.send({
    name: {
      dbOfMembers
    }
  })
});

/* Add a new mobmember. */
router.post('/:id', function(req, res, next) {
  const memberName = req.body.name;
  const mobId = req.params.id;
  dbOfMembers.push({
    mobID: mobId,
    name: memberName
  });
  res.send({
      names: dbOfMembers
  })
});

/* Add a delete mobmember. */
router.delete('/:name', function(req, res, next) {
  const memberName = req.params.name;
  dbOfMembers = dbOfMembers.filter(mob => mob.name !== memberName);
  res.send({
      dbOfMembers
  })
});

module.exports = router;