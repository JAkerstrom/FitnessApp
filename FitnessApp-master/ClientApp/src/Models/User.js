export default class User {
    constructor(id, username, email, token) {
        this.id = id;
        this.username = username,
        this.email = email;
        this.token = token;
    }

    differsFrom(that) {
        if (this.username !== that.username) {
            return true;
        }
        if (this.email !== that.email) {
            return true;
        }
        return false;
    }

    copyMe() {
        return new User(this.id, this.username, this.email, this.token);
    }

    isValid() {
        if (!this.username || this.username.length < 2 || this.username.length > 25) {
            return false;
        }

        if (!this.email || this.email.length < 2 || this.email.length > 20) 
        {
            return false;
        }
        return true;
    }
}