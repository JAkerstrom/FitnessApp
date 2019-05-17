export default class Workout {
    constructor(starttime, endtime, exercises, id = 0) {
        this.id = id;
        this.starttime = starttime;
        this.endtime = endtime;
        this.exercises = exercises;
    }
}