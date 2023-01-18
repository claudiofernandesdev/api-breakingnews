const mongoose = require('mongoose');

const connectDatabase = () => {
	console.log('Wait connecting to database');

	mongoose
		.connect(
			'mongodb+srv://ClaudioFernandes:iPJjF3jT2UXmT1Ja@cluster0.fwgjee4.mongodb.net/?retryWrites=true&w=majority',
			{ useNewUrlParser: true, useUnifiedTopology: true }
		)
		.then(() => console.log('MongoDB Connected!'))
		.catch((error) => console.log(error));
};

module.exports = connectDatabase;
