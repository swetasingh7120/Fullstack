
var{getEmployee,AddEmployee,UpdateEmployee,DeleteEmployee} = require('../services/empServices')

module.exports = {
    getEmployee: (req, res) => {
        getEmployee((err, result) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Records Not Found",
          });
        }
        return res.json({
          succcess: 1,
          data: result,
        });
      });
    },
  
    AddEmployee: (req, res) => {
        AddEmployee(req.body, (err, result) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Records Not Found",
          });
        }
        return res.json({
          succcess: 1,
          message: "User Successfully Got Added",
        });
      });
    },
    UpdateEmployee: (req, res) => {
      console.log(req.body, 'Body')
      const employeeID = req.body._id;
      if (employeeID === "" || employeeID === undefined) {
        res.status(422).json({
          success: 0,
          message: " Employee Id Is Mandatory Or Required",
        });
      }
      UpdateEmployee(req.body, (err, result) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Records Not Found",
          });
        }
        return res.json({
          succcess: 1,
          message: "User Updated Successfully",
        });
      });
    },
  
    DeleteEmployee: (req, res) => {
      console.log('gg')
      console.log(req._id, 'ID FROM CONTROLLERs')
      const employeeID = req.body._id;
      if (employeeID === "" || employeeID === undefined) {
        res.status(422).json({
          success: 0,
          message: " Employee Id Is Mandatory Or Required",
        });
      }
      DeleteEmployee(req.body, (err, result) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Records Not Found",
          });
        }
        return res.json({
          succcess: 1,
          message: "Employee Deleted Successfully",
        });
      });
    },
  };
  