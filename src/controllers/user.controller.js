const create = (req, res) => {
    const {name, userName, email, password, avatar, background} = req.body;
        if (!name || !userName || !email || !password || !avatar || !background) {
            res.status(400).send({message: "Submit all fields are required"});
        };
    res.status(201).send({
        message: "User created successfully",
        user: {
            name,
            userName,
            email,
            avatar,
            background
        }
    });

    console.log(user);
};

module.exports = { create };