const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const userValidation = require('../validations/user.validation');
const userController = require('../controllers/user.controller');
const catchAsync = require('../utils/catchAsync');
const jsend = require('../utils/jsend');

const router = express.Router();

const meRouter = express.Router() ;

router.use("/me", auth(), meRouter) ;

meRouter.get("/", catchAsync(async function(req, res){
  return res.send(jsend.success({user: req.user}))
}))

router
  .route('/')
  .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
  .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

router
  .route('/:userId')
  .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);


module.exports = router;

