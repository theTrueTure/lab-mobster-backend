var express = require('express');
var router = express.Router();

const { mobs, members } = require('./db.js');

/* GET mob listing. */
router.get('/', function (req, res, next) {
	res.send({
		mobs: {
			mobs,
		},
	});
});

// This function is for getting the members with an ID, we had this in ./members
// but i moved it here. I modify some things but  it returns null :´(

// router.get('/:mobId', function (req, res, next) {
// 	const mobId = Number(req.params.mobId);
// 	let membNames = [];
// 	mobs.map(mob => {
// 		if (mob.id === mobId) {
// 			members.map(member => {
// 				membNames.push(members.names[member]);
// 			});
// 		}
// 	});
// 	res.send({
// 		membNames,
// 	});
// });

/* GET members in a mob. */
router.get('/:mobID/members', function (req, res, next) {
	const mobID = req.params.mobID;
	const memberList = [];
	members.map(member => {
		if (member.mobId === Number(mobID)) {
			memberList.push(member);
		}
	});
	res.send({
		mobMembers: {
			memberList,
		},
	});
});

/* Add a new mobmember. */
router.post('/', function (req, res, next) {
	const mob = req.body.name;
	mobs.push({
		id: Date.now(),
		name: mob,
	});
	res.send({
		mobname: mobs,
	});
});

/* Add a delete mobmember. */
router.delete('/:id', function (req, res, next) {
	const mobID = req.params.id;
	mobs = mobs.filter(mob => mob.id !== Number(mobID));
	res.send({
		mobs: {
			mobs,
		},
	});
});

module.exports = router;
