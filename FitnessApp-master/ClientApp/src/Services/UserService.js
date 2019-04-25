import axios from 'axios';
import ResponseVM from '../Models/Messages/ResponseVM';
import User from '../Models/User';
import constants from '../Utils/stringConstants';

export default class UserService {

    static login(email, password, receiveresponse, errorcallback) {

        axios.post('auth/login', {
            "Email": email,
            "Password": password,
            "ReturnUrl": "",
            "Token": ""
        })
            .then(function (res) {
                let user = "";

                if (res.data.requestSuccess) {
                    user = new User(res.data.user.id, res.data.user.userName,
                        res.data.user.email, res.data.user.token);

                    let response = new ResponseVM(
                        res.data.requestSuccess,
                        user
                    );
                    receiveresponse(response);
                }
                else {
                    errorcallback();
                }
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static register(email, password, receiveresponse, errorcallback) {

        axios.post('auth/register', {
            "Email": email,
            "Password": password,
            "ReturnUrl": "",
            "Token": ""
        })
            .then(function (res) {

                let newuser = "";

                if (res.data.requestSuccess) {
                    newuser = new User( res.data.user.id, res.data.user.userName,
                                        res.data.user.email, res.data.user.token);

                    let response = new ResponseVM(
                        res.data.requestSuccess,
                        newuser
                    );
                    receiveresponse(response);
                }
                else {
                    errorcallback();
                }
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static logout(user, receiveresponse) {

        axios.post('auth/logout', {
            "User": user,
            "ReturnUrl": "",
            "Token": ""
        })
            .then(function (res) {
                let response = new ResponseVM(res.data.requestSuccess);

                receiveresponse(response);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static update(user, receiveresponse, callback) {

        axios.post('account/update', {
            "Id": user.id,
            "UserName": user.username,
            "Email": user.email,
            "Token": user.token
        })
            .then(function (res) {
                let newuser = ""

                if (res.data.requestSuccess) {
                    newuser = new User(res.data.user.id, res.data.user.userName,
                        res.data.user.email, res.data.user.token);


                    var response = new ResponseVM(
                        res.data.requestSuccess,
                        newuser
                    );

                    callback(constants.success);
                    receiveresponse(response);
                } else {
                    callback(constants.failed)
                }
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });

    }

    static delete(user, receiveresponse) {

        axios.delete('account/delete', { params: { id: user.id } })
            .then(function (res) {


                var response = new ResponseVM(res.data.requestSuccess);
        
                receiveresponse(response);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }
}