var express = require('express');
var router = express.Router();

const { members } = require('./db.js');

/* GET members listing. */
router.get('/', (req, res, next) => {
	res.send({ members });
});

/* Add a new mobmember. */
router.post('/:id', function (req, res, next) {
	let memberName = req.body.name;
	let mobId = Number(req.params.id);
	members.push({
		mobID: mobId,
		memberId: Date.now(),
		name: memberName,
	});
	res.send({
		names: members,
	});
});

/* Add a delete mobmember. */
router.delete('/:memberId', function (req, res, next) {
	let memberId = req.params.memberId;
	members = members.filter(member => member.memberId !== Number(memberId));
	res.send({
		members,
	});
});

module.exports = router;
