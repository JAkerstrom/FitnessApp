
export default class ResponseVM {
    constructor(requestSuccess, user = "") {
        this.user = user;
        this.requestSuccess = requestSuccess;
    }
}