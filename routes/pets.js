var express = require('express');
var router = express.Router();
const client = require('../redis-client');
/* GET users listing. */
router.get('/', async(req, res, next) =>
{
	client.keys("*", (err, pets) =>{
		res.json({pets:pets});
	});
});

router.post('/', async(req, res, next) =>
{
	client.HMSET(req.body.name, "name", req.body.name, "age", req.body.age, (err, pet) =>{
		res.status(201).send();
	});
});


router.get('/:name', async(req, res, next) =>
{
	client.hgetall(req.params.name, (err, pet) =>{
		res.json(pet);
	});
});

module.exports = router;
