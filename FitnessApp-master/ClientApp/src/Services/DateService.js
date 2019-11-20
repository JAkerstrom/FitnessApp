

export default class DateService {

    static DayAndMonth(date) {
        var date = new Date(date);

        let month = date.getMonth();
        let day = date.getDate();
        return day + "/" + month;
    }

    static DayAsText(date) {

        var date = new Date(date);
        var d = date.toLocaleDateString('sv-SE', { weekday: 'long' }); 

        return d;
    }

    static Time(date) {
        var date = new Date(date);

        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

        return hours + ":" + minutes;
    }

    static SetTime(date, time) {

        return new Date(date + 'T' + time);
    }
}