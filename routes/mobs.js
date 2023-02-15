var express = require('express');
var router = express.Router();

const { mobs, members } = require('./db.js');

/* GET mob listing. */
router.get('/', function(req, res, next) {
  res.send({
    mobs: {
      mobs
    }
  })
});

/* GET members in a mob. */
router.get('/:mobID/members', function(req, res, next) {
  const mobID = req.params.mobID
  const memberList = []
  members.map(member => {
    if (member.mobID === Number(mobID)) {
      memberList.push(member)
    }})
  res.send({
    mobMembers: {
      memberList
    }
  })
});

/* Add a new mobmember. */
router.post('/', function(req, res, next) {
  const mob = req.body.name;
  mobs.push({
    id: Date.now(),
    name: mob
  });
  res.send({
      mobname: mobs
  })
});

/* Add a delete mobmember. */
router.delete('/:id', function(req, res, next) {
  const mobID = req.params.id;
  mobs = mobs.filter(mob => mob.id !== Number(mobID));
  res.send({
    mobs: {
      mobs
    }
  })
});

module.exports = router;