export default function UserReducer(state = initialState, action){
    switch (action.type) {
        case "CHANGE_USERSTATE":
            var obj = Object.assign({}, state, {
                user: action.user
            });
            return obj;
        default:
            return state;
    };
}

const initialState = {
    user: ""
};