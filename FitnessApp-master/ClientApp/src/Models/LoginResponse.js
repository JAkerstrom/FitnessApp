export default class LoginResponse {
    constructor(user, message, requestSuccess, nextUrl, returnUrl) {
        this.user = user;
        this.message = message;
        this.requestSuccess = requestSuccess;
        this.nextUrl = nextUrl;
        this.returnUrl = returnUrl;
    }
}