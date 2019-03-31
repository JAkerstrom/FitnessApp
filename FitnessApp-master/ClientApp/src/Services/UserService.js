import axios from 'axios';
import ResponseVM from '../Models/Messages/ResponseVM';
import User from '../Models/User';

export default class UserService {

    static login(email, password, receiveresponse) {

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
                }

                let response = new ResponseVM(res.data.message,
                                            res.data.receiver,
                                            res.data.requestSuccess, 
                                            res.data.nextUrl,
                                            res.data.returnUrl,
                                            user);
                receiveresponse(response);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static register(email, password, receiveresponse) {

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
                }

                let response = new ResponseVM(res.data.message,
                                            res.data.receiver,
                                            res.data.requestSuccess,
                                            res.data.nextUrl,
                                            res.data.returnUrl,
                                            newuser);
                receiveresponse(response);
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
                let response = new ResponseVM(res.data.message,
                                            res.data.receiver,
                                            res.data.requestSuccess,
                                            res.data.nextUrl,
                                            res.data.returnUrl);
                receiveresponse(response);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static update(user, receiveresponse) {

        axios.post('account/update', {
            "Id": user.id,
            "UserName": user.username,
            "Email": user.email,
            "Token": user.token
        })
            .then(function (res) {
                let newuser = ""

                if (res.data.requestSuccess) {
                    newuser = new User( res.data.user.id, res.data.user.userName,
                                        res.data.user.email, res.data.user.token);
                }


                var response = new ResponseVM(res.data.message,
                                            res.data.receiver,
                                            res.data.requestSuccess,
                                            res.data.nextUrl,
                                            res.data.returnUrl,
                                            newuser);
                receiveresponse(response);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });

    }

    static delete(user, receiveresponse) {

        axios.delete('account/delete', { params: { id: user.id } })
            .then(function (res) {


                var response = new ResponseVM(res.data.message, 
                                            res.data.receiver,
                                            res.data.requestSuccess,
                                            res.data.nextUrl,
                                            res.data.returnUrl);
        
                receiveresponse(response);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }
}