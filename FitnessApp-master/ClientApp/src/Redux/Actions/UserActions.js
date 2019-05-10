function changeUserState(user) {
    return {
        type: "CHANGE_USERSTATE",
        user
    };
}

export default changeUserState;