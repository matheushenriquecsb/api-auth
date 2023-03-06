import mongoose from "mongoose";

const UserSchema = new mongoose.Schema("User", {
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
