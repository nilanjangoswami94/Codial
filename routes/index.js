const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller')

const userController = require('../controllers/user_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));
// router.get('/profile', userController.profile)
router.use('/posts', require('./posts'));
//for any further routes, access from here
//router.use('./routerName', require('/routerfile));

router.use('/comments', require('./comments'));
// router.use('/users/profile', require('./users/profile'));

router.use('/api', require('./api'));

module.exports = router;
