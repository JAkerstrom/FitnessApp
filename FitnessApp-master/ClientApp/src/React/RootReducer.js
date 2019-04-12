
function RootReducer(state, action) {
    if (state === undefined) {
        return { user: "" };
    }

    var user = state.user;

    switch (action.type) {
        case "login":
            return { user: user };
        case "logout":
            return { user: "" };
        case "API_RESPONSE":
            return Object.assign({}, state, {
                user: state.user,
                message: state.message,
                user: state.user,
                receiver: state.receiver
            });
        default:
            return state;
    }
}

export default RootReducer;

const handleResponse = () => {

};