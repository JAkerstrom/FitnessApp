
export default class ResponseVM {
    constructor(message, receiver, requestSuccess,
        nextUrl, returnUrl, user = "") {
        this.user = user;
        this.message = message;
        this.receiver = receiver;
        this.requestSuccess = requestSuccess;
        this.nextUrl = nextUrl;
        this.returnUrl = returnUrl;
    }
}