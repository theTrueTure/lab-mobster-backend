var express = require('express');
var router = express.Router();

const {members} = require('./db.js');

/* GET members listing. */
router.get('/',  (req, res, next) => {
  res.send({members})
})

router.get('/:mobId', function(req, res, next) {
  const mobId = Number(req.params.mobId);
  let result = [];
  for (let i = 0; i < members.length; i++){
    if (members[i].mobID === mobId) {
      result.push(members[i])
    }
  }
  res.send({
      result
  })
});

/* Add a new mobmember. */
router.post('/:id', function(req, res, next) {
  const memberName = req.body.name;
  const mobId = Number(req.params.id);
  members.push({
    mobID: mobId,
    memberId: Date.now(),
    name: memberName
  });
  res.send({
      names: members
  })
});

/* Add a delete mobmember. */
router.delete('/:memberId', function(req, res, next) {
  const memberId = req.params.memberId;
  members = members.filter(member => member.memberId !== Number(memberId));
  res.send({
      members
  })
});

module.exports = router;
