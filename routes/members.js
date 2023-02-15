var express = require('express');
var router = express.Router();

let dbOfMembers = [];

/* GET members listing. */
router.get('/',  (req, res, next) => {
  res.send({dbOfMembers})
})

router.get('/:mobId', function(req, res, next) {
  const mobId = Number(req.params.mobId);
  let result = [];
  for (let i = 0; i < dbOfMembers.length; i++){
    if (dbOfMembers[i].mobID === mobId) {
      result.push(dbOfMembers[i])
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
  dbOfMembers.push({
    mobID: mobId,
    memberId: Date.now(),
    name: memberName
  });
  res.send({
      names: dbOfMembers
  })
});

/* Add a delete mobmember. */
router.delete('/:memberId', function(req, res, next) {
  const memberId = req.params.memberId;
  dbOfMembers = dbOfMembers.filter(member => member.memberId !== Number(memberId));
  res.send({
      dbOfMembers
  })
});

module.exports = router;