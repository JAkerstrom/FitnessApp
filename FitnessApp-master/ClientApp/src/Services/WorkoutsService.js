import axios from 'axios';
import Workout from '../Models/Workout';
import Exercise from '../Models/Exercise';
import User from '../Models/User';

export default class WorkoutsService {


    static Exercises(id, callback) {

        axios.get('workouts/exercises/', {
            params: {
                id: id
            }
        })
            .then(function (res) {
                let exList = [];
                if (res.data.length > 0) {
                    for (let i = 0; i < res.data.length; i++) {
                        exList.push(
                            new Exercise(
                                res.data[i].id,
                                res.data[i].name,
                                res.data[i].description)
                        )
                    };
                }
                callback(exList);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static List(id, callback) {

        axios.get('workouts/list/', {
            params: {
                id: id
            }
        })
            .then(function (res) {
                let workoutslist = [];
                if (res.data.workouts.length > 0) {
                    for (var i = 0; i < res.data.workouts.length; i++) {
                        let workout = res.data.workouts[i];
                        let exercises = workout.exercises;
                        let exerciselist = [];

                        for (let i = 0; i < exercises.length; i++){
                            exerciselist.push(
                                new Exercise(
                                    exercises[i].id,
                                    exercises[i].name,
                                    exercises[i].description)
                            )
                        };

                        let model = new Workout(
                            workout.starttime,
                            workout.endtime,
                            exerciselist,
                            workout.id
                        );
                        workoutslist.push(model);
                    }
                }
                callback(workoutslist);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static delete(id, userid, callback) {

        axios.delete('workouts/delete/', { params: { id: id } })
            .then(function (res) {

                WorkoutsService.List(userid, callback);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static add(userid, workout, callback) {
        var data = {
            "userid": userid,
            "starttime": workout.starttime,
            "endtime": workout.endtime,
            "exerciseid": workout.exerciseid
        };
        axios.post('workouts/add/', data)
            .then(function (res) {
                WorkoutsService.List(userid, callback);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }
}