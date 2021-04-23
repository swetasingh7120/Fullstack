var express = require('express');
const { getUser,AddUser,UpdateUser,DeleteUser, getUserByUserId ,login} = require('../controllers/usercontrollers');
var router = express.Router();
const{checkToken} = require("../auth/token_validation");
/* GET users listing. */
router.get('/',checkToken, getUser);
router.get('/:id', getUserByUserId)
router.post('/PostUser',checkToken, AddUser);
router.post('/UpdateUser',checkToken, UpdateUser);
router.post('/DeleteUser',checkToken, DeleteUser);
router.post("/login", login)
module.exports = router;
