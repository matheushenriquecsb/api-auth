const userService = require('../services/userService');

const getUsers = async (req, res) => {
    try {
        console.log(req.query)
        const response = await userService.getUsers(req.query);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getUsers,
};
