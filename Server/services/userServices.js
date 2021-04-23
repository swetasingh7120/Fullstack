const db = require("../dbConnection");
module.exports = {
    getUser: (callBack) => {
        db.query(`Select * from regist`,
            [],
            (err, result, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            })
    },

    AddUser: (data, callBack) => {
        db.query(`insert into regist(firstName,lastName,gender,email,password,number) values(?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (err, result, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            }
        )
    },

    UpdateUser: (data, callBack) => {
        db.query(`update regist set firstName= ?,lastName =?,gender =?,email=?,password=?,number=? where _id = ?`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                data._id
            ],
            (err, result, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            }
        )
    },
    DeleteUser: (data, callBack) => {
        db.query(`delete from regist where _id= ?`,
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
    getUserByUserEmail:(email,callBack) =>{
        db.query(
            `select * from regist where email = ?`,
            [email],
            (error, result, feilds) => {
                if (error){
                    callBack(error);
                }
            
            return callBack(null, result[0]);
        }
        )
    }

};