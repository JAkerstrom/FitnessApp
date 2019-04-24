export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    };
}

const initialState = {
    user: ""
};