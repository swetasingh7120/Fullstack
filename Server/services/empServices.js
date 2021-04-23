const db = require("../dbConnection");
module.exports = {
    getEmployee: (callBack) => {
        db.query(`Select * from employee`,
            [],
            (err, result, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            })
    },

    AddEmployee: (data, callBack) => {
        db.query(`insert into employee(jobTitleName,firstName,lastName,email) values(?,?,?,?)`,
            [
                data.jobTitleName,
                data.firstName,
                data.lastName,
                data.email
            ],
            (err, result, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            })
    },

    UpdateEmployee: (data, callBack) => {
        console.log(data, 'Data')
        db.query(`update employee set  jobTitleName = ?, firstName = ?, lastName = ?, email =? where _id= ?`,
            [
                data.jobTitleName,
                data.firstName,
                data.lastName,
                data.email,
                data._id
            ],
            (err, result, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            })
    },

    DeleteEmployee: (data, callBack) => {
        console.log(data._id, 'ID')
        db.query(`delete from employee where _id= ?`,
            [

                data._id
            ],
            (err, result, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            })
    },
}