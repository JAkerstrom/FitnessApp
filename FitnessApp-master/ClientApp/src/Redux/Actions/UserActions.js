function changeUserState(user, message = "", receiver = 0) {
    return {
        type: "CHANGE_USERSTATE",
        user,
        message,
        receiver
    };
}

export default changeUserState;