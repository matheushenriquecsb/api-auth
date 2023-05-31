import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const login = async (data) => {
  const user = await UserModel.findOne({ email: data.email });

  if (!user) {
    throw new Error("User not found.");
  }

  const match = await bcrypt.compare(data.password, user.password);

  if (match) {
    const accessToken = jwt.sign(
      JSON.stringify({
        email: user.email,
        name: user.name,
      }),
      process.env.HASH_AUTH_TOKEN
    );

    return {
      success: true,
      accessToken,
    };
  }

  throw new Error("Invalid credentials.");
};

const register = async (data) => {
  const user = await UserModel.findOne({ email: data.email });

  if (user) {
    throw new Error("User with email informed already exists.");
  }

  const encryptedPassword = await bcrypt.hash(data.password, 10);

  const userCreated = await UserModel.create({
    ...data,
    password: encryptedPassword,
  });
  userCreated.password = null;

  return userCreated;
};

export default { login, register };
