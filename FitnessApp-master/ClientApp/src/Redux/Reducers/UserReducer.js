export default function UserReducer(state = initialState, action){
    switch (action.type) {
        case "CHANGE_USERSTATE":
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