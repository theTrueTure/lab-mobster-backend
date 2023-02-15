var express = require('express');
var router = express.Router();

let mobs = [];

/* GET mob listing. */
router.get('/', function(req, res, next) {
  res.send({
    name: {
      mobs
    }
  })
});

/* Add a new mobmember. */
router.post('/', function(req, res, next) {
  const mob = req.body.mob;
  mobs.push({
    id: Date.now(),
    mob
  });
  res.send({
    name: {
      mobs
    }
  })
});

/* Add a new mobmember. */
router.delete('/:id', function(req, res, next) {
  const mobId = req.params.id;
  mobs = mobs.filter(mob => mob.id !== Number(mobId));
  res.send({
    name: {
      mobs
    }
  })
});

module.exports = router;