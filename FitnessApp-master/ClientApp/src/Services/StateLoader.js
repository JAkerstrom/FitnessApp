import User from '../Models/User';

export default class StateLoader {

    loadState() {
        let storeduser = window.localStorage.getItem('user');        let state;         if (storeduser === undefined || storeduser == null) {            state = { user: "" };            return state;        }                let user = JSON.parse(storeduser); 
        state = { user: new User(user.id, user.username, user.email, user.token) }
        return state;        
    }

    saveState(state) {
        if (state.user == "") {
            this.clearLocalStorage();
        }
        window.localStorage.setItem('user', JSON.stringify(state.user));
    }

    clearLocalStorage() {
        window.localStorage.clear();
    }
}