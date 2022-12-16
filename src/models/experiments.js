const db = require('./firebase_connect');
//y= 100-0.02315*t
//y = -.08488*t+122.222
exports.experimentStudents = async function experimentStudents(req,res) {
	try {
		let i = 0;
		let data = [];
		const experimentID = req.body.id;
		const studentName = req.body.name;
		const studentChoice = req.body.choices;
		console.log(`
			${experimentID}
			${studentName}
			${studentChoice}`);

		if(studentChoice === 100){
			console.log('100');
			for(i = 420;i <= 1440; i++) {
				data.push(-0.023148*i+96.296);
			}
		} else if (studentChoice === 80) {
			console.log('80');
			for(i = 420;i <= 1440; i++) {
				data.push(-0.035494*i+101.481);
			}
		} else if (studentChoice === 20) {
			console.log('20');
			for(i = 420;i <= 1440; i++) {
				data.push(-0.07253*i+117.037);
			}
		} else {
			console.log('0');
			for(i = 420;i <= 1440; i++) {
				data.push(-0.08488*i+122.222);
			}
		}

		try {
			const response = await db.collection('studentExperiments').doc(studentName).set({
				name: studentName,
				sumChoice: studentChoice,
				data: data
			});
			res.send(response);
		} catch (error) {
			res.status(400).send(error);
		}

	} catch (error) {
		res.status(400).send(error);
	}
};
exports.experimentStudent = async function experimentStudent(req,res) {
	try {
		
		const id = req.body.id;
		let data = [4];
		let data100 = [];
		let data80 = [];
		let data20 = [];
		let data00 = [];

		data[0] = data100;
		data[1] = data80;
		data[2] = data20;
		data[3] = data00;

		for(let i =0;i<=420;i++) {
			if(i>360) {
				data.push(-.08488*i+122.222);
			}
			else{ 
				data.push(100-0.02315*i);
			}
		}

		for (let i = 420;i<=1440;i++){
			data100.push(-0.023148*i+96.296);
			data80.push(-0.035494*i+101.481);
			data20.push(-0.07253*i+117.037);
			data00.push(-0.08488*i+122.222);
		}
		console.log(data);
		try {
			const response = await db.collection('chimera').doc(id).set({
				data: data
			});
			res.send(response);
		} catch (error) {
			res.status(400).send(error);
		}
	} catch (error) {
		res.send(error);
	}
};