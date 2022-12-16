const express = require('express');
const router = express.Router();
const experiments = require('./models/experiments');
const db = require('./models/firebase_connect');

router.post('/create', async (req, res) => {
	try {
		console.log(req.body);
		const id = req.body.email;
		const userJson = {
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		};
		const response = await db.collection('chimera').doc(id).set(userJson);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
});
router.post('/y',(req,res) => experiments.experimentStudents(req,res));
router.post('/x', (req, res) => experiments.experimentStudent(req, res));
router.get('/', (req, res) => {
	res.status(200).send('Rauter working !!!');
});

module.exports = router;
