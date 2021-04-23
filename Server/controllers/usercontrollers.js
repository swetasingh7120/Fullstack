
var { getUser, getUserByUserId, AddUser, UpdateUser, DeleteUser, getUserByUserEmail } = require('../services/userServices')
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const {sign} = require("jsonwebtoken");
module.exports = {
    getUser: (req, res) => {
        getUser((err, result) => {
            if (err) {
                return res.json({
                    success: 0,
                    message: "Records Not Found",
                });
            }
            return res.json({
                success: 1,
                data: result,
            });
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params._id;
        getUserByUserId(_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Record not found'
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },

    AddUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        AddUser(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.json({
                    success: 0,
                    message: "Records Not Found",
                });
            }
            return res.json({
                succcess: 1,
                message: "User SuccessFully Added"
                // message: "User Successfully Got Added",
            });
        })


    },
    UpdateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        UpdateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "update successfully"
            });
        })

    },




    DeleteUser: (req, res) => {
        console.log('gg')
        console.log(req._id, 'ID FROM CONTROLLERs')
        const userID = req.body._id;
        if (userID === "" || userID === undefined) {
            res.status(422).json({
                success: 0,
                message: " User Id Is Mandatory Or Required",
            });
        }
        DeleteUser(req.body, (err, result) => {
            if (err) {
                return res.json({
                    success: 0,
                    message: "Records Not Found",
                });
            }
            return res.json({
                succcess: 1,
                message: "User Deleted Successfully",
            });
        });
    },
    login:(req,res)=>{
        const body = req.body;
        getUserByUserEmail(body.email, (err, result)=>{
            if(err){
                console.log(err);
            }
            if (!result){
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            const answer = compareSync(body.password, result.password);
            if(answer){
                result.password = undefined;
                const jsontoken = sign({answer: result}, "qwe1234",{
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data:"Invalid email or password"
                })
            }
        });
    }
};
