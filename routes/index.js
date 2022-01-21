const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller')

const userController = require('../controllers/user_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.get('/profile', userController.profile)
//for any further routes, access from here
//router.use('./routerName', require('/routerfile));


module.exports = router;
