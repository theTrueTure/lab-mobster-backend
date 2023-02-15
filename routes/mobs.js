var express = require('express');
var router = express.Router();

let database = [{
  "id": 1676464991028,
  "name": "amber"
}];

/* GET mob listing. */
router.get('/', function(req, res, next) {
  res.send({
    mobs: {
      database
    }
  })
});

/* Add a new mobmember. */
router.post('/', function(req, res, next) {
  const mob = req.body.name;
  database.push({
    id: Date.now(),
    name: mob
  });
  res.send({
      mobname: database
  })
});

/* Add a delete mobmember. */
router.delete('/:id', function(req, res, next) {
  const mobId = req.params.id;
  database = database.filter(mob => mob.id !== Number(mobId));
  res.send({
    mobs: {
      database
    }
  })
});

module.exports = router;