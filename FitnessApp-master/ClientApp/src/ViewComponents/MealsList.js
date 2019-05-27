import React, { Component } from 'react';
import DateService from '../Services/DateService';

export default class MealsList extends Component {
    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    delete(e) {
        let btn = e.target;
        let mealid = btn.closest('li').getAttribute("data-index");
        this.props.delete(mealid);
    }

    renderDishes(item) {
        if (item.dishes.length > 0) {

            return (
                item.dishes.map(dish => (
                    <div key={dish.id} className="col">{dish.name}</div>
                ))
            );
        }
    }

    renderMeals() {
        if (this.props.items.length > 0) {
            return (
                this.props.items.map(item => (
                    <li
                        key={item.id}
                        data-index={item.id}
                        className="list-group-item">
                        <div className="row">
                            <div className="col-3">
                                <h4>{DateService.DayAsText(item.datetime)},
                                    {DateService.DayAndMonth(item.datetime)}
                                </h4>
                            </div>
                            <div className="col-3">
                                <p>{DateService.Time(item.datetime)}</p>
                            </div>
                            <div className="col-3">
                                {this.renderDishes(item)}
                            </div>
                            <div className="col-3">
                                <button onClick={this.delete} className="btn btn-sm float-right">x</button>
                            </div>
                        </div>
                    </li>
                ))
            );
        }
        return <li><h3 className="text-center">Inga sparade Måltider</h3></li>
    }

    render() {

        let cardstyle = {
            height: "100%"
        }

        return (
            <div className="card" style={cardstyle}>
                <div className="card-header text-center">
                    <h2>Måltider</h2>
                </div>
                <ul className="list-group">
                    {this.renderMeals()}
                </ul>
            </div>
            );
    }
}