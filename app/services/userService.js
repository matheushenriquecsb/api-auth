const UserModel = require('../models/User');

const getUsers = async (query) => {
    const users = UserModel.find(query);
    return users;
}

module.exports = {
    getUsers,
};
