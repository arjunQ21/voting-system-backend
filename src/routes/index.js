const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const JWT = require('../middlewares/jwt');
const jsend = require('../utils/jsend');
const handleValidationErrors = require('../middlewares/handleValidationErrors');
const catchAsync = require('../utils/catchAsync');
const { param } = require('express-validator');

const router = express.Router();

router.get('/', function (req, res) {
  res.send('Good Boy');
});

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
