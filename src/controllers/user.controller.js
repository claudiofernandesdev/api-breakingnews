const userService = require('../services/user.service');

const create = async (req, res) => {
	const { name, userName, email, password, avatar, background } = req.body;
	if (!name || !userName || !email || !password || !avatar || !background) {
		res.status(400).send({ message: 'Submit all fields are required' });
	}

	const user = await userService.create(req.body);

	if (!user) {
		return res.status(400).send({ message: 'Error creating user' });
	}

	res.status(201).send({
		message: 'User created successfully',
		user: {
            id: user._id,
			name,
			userName,
			email,
			avatar,
			background,
		},
	});

	console.log(user);
};

module.exports = { create };
