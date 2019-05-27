import axios from 'axios';
import Dish from '../Models/Dish';
import Meal_List from '../Models/Meal_List';


export default class MealsService {

    static Dishes(id, callback) {

        axios.get('meals/dishes/', {
            params: {
                id: id
            }
        })
            .then(function (res) {
                if (res.data.length > 0) {

                    let dishlist = [];

                    for (let i = 0; i < res.data.length; i++) {
                        dishlist.push(
                            new Dish(
                                res.data[i].id,
                                res.data[i].name,
                                res.data[i].description)
                        )
                    };

                    callback(dishlist);
                }
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static List(id, callback) {

        axios.get('meals/list/', {
            params: {
                id: id
            }
        })
            .then(function (res) {
                if (res.data.meals.length > 0) {
                    let mealsslist = [];

                    for (var i = 0; i < res.data.meals.length; i++) {
                        let meal = res.data.meals[i];
                        let dishes = meal.dishes;
                        let dishlist = [];

                        for (let i = 0; i < dishes.length; i++) {
                            dishlist.push(
                                new Dish(
                                    dishes[i].id,
                                    dishes[i].name,
                                    dishes[i].description)
                            )
                        };

                        let model = new Meal_List(
                            meal.id,
                            meal.datetime,
                            dishlist
                        );
                        mealsslist.push(model);
                    }
                    callback(mealsslist);
                }
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static delete(id, userid, callback) {

        axios.delete('meals/delete/', { params: { id: id } })
            .then(function (res) {
                var response = res;
                MealsService.List(userid, callback);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    static add(userid, meal, callback) {

        axios.post('meals/add/',
            {
                "userid": userid,
                "datetime": meal.datetime,
                "dishid": meal.dish
            }
        )
            .then(function (res) {
                var response = res;
                MealsService.List(userid, callback);
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }
}