var express = require('express');
var router = express.Router();
var { getEmployee, AddEmployee, UpdateEmployee, DeleteEmployee } = require('../controllers/empcontrollers')
/* GET employee listing. */
router.get('/', getEmployee);
router.post('/PostEmployee', AddEmployee);
router.post('/UpdateEmployee', UpdateEmployee);
router.post('/DeleteEmployee', DeleteEmployee);

module.exports = router;