require('dotenv').config();
require('./app/database');
const express = require('express');
const authRoutes = require('./app/routes/authRoutes');
const userRoutes = require('./app/routes/userRoutes');

const app = express();
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

app.use(express.json());
app.use(router);

const port = process.env.APP_PORT;
app.listen(port, () => console.log(`server is running on port ${port}`));
