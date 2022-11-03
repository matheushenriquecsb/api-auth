const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../validators/validate');
const authValidators = require('../validators/authValidators');

router.post('/login', validate(authValidators.authLoginValidatorSchema), authController.login);
router.post('/register', validate(authValidators.authRegisterValidatorSchema), authController.register);

module.exports = router;
