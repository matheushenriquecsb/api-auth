import UserModel from "../models/User.js";

const getUsers = async (query) => {
  const users = UserModel.find(query);
  return users;
};

export default getUsers;
