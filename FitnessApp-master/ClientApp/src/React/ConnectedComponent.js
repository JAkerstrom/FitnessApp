import axios from 'axios';
import ResponseVM from '../Models/Messages/ResponseVM';
import User from '../Models/User';

import { connect } from "react-redux";
import Main from "../Main";


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        user: state.user
    };
}

// Action
var loginAction = { type: "login" };
var logoutAction = { type: "logout" };
var responseAction = { type: 'API_RESPONSE' };

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        login: function (email, password) {
            //return dispatch(loginAction);
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
                    //receiveresponse(response);
                    dispatch({
                        type: responseAction,
                        user: response.user,
                        message: response.message,
                        receiver: response.receiver
                    });
                })
                .catch(function (error) {
                    console.log("error occured: ", error);
                });
        },
        logout: function (user) {
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
                    //receiveresponse(response);
                    dispatch({
                        type: responseAction,
                        user: response.user,
                        message: response.message,
                        receiver: response.receiver
                    });
                })
                .catch(function (error) {
                    console.log("error occured: ", error);
                });
        }
    };
}

// The HOC
var ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default ConnectedComponent;