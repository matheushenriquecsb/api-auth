import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./database/index.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

app.use(express.json());
app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(`server is running on port ${port}`);
  connectDb();
});
