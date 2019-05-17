import axios from 'axios';
import Workout from '../Models/Workout';
import Exercise from '../Models/Exercise';
import User from '../Models/User';

export default class WorkoutsService {

    static List(id, callback) {

        axios.get('workouts/list/', {
            params: {
                id: id
            }
        })
            .then(function (res) {
                if (res.data.workouts.length > 0) {
                    let workoutslist = [];

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
                    callback(workoutslist);
                }
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static delete(id) {

        axios.delete('workouts/delete/', { params: { id: id } })
            .then(function (res) {
                var response = res;
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static add(userid, workout) {

        axios.post('workouts/add/', 
            {
                "userid": userid,
                "starttime": workout.starttime,
                "endtime": workout.endtime,
                "exerciseid": workout.exerciseid
            }
        )
            .then(function (res) {
                var response = res;
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }
}