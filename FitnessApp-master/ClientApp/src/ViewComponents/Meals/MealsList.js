import React, { Component } from 'react';
import DateService from '../../Services/DateService';

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

        let style = { paddingTop: "10px", paddingLeft: "0px" };

        if (item.dishes.length > 0) {

            return (
                item.dishes.map(dish => (
                    <div key={dish.id} className="col" style={style}>{dish.name}</div>
                ))
            );
        }
    }

    renderMeals() {

        let noSidePadding = {
            paddingLeft: "6px",
            paddingRight: "0px"
        }

        let noMargin = {
            margin: "0px",
            padding: "10px 5px 5px 5px"
        }

        if (this.props.items.length > 0) {
            return (
                this.props.items.map(item => (
                    <li
                        key={item.id}
                        data-index={item.id}
                        className="list-group-item">
                        <div className="row">
                            <div className="col-9 float-left" style={noSidePadding}>
                                <div className="row">
                                    <div className="col-6 col-sm-4 overflow-hidden">
                                        <p style={noMargin}>{DateService.DayAsText(item.datetime) + " " + DateService.DayAndMonth(item.datetime)}</p>
                                    </div>
                                    <div className="col-6 col-sm-3 overflow-hidden">
                                        <p style={noMargin}>{DateService.Time(item.datetime)}</p>
                                    </div>
                                    <div className="col-12 col-sm-5">
                                        {this.renderDishes(item)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 float-right">
                                <button onClick={this.delete} className="btn btn-lg float-right" style={noSidePadding}>
                                    <span className="fa fa-minus-circle"></span>
                                </button>
                            </div>
                        </div>
                    </li>
                ))
            );
        }
        return <li><h3 className="text-center m-3">Inga sparade Måltider</h3></li>
    }

    render() {

        let cardstyle = {
            minHeight: "70vh",
            maxHeight: "80vh"
        }

        let bodyStyle = {
            height: "100%",
            overflow: "scroll"
        }

        return (
            <div className="card" style={cardstyle}>
                <div className="card-header text-center card-header-purple">
                    <h2>Måltider</h2>
                </div>
                <div style={bodyStyle}>
                    <ul className="list-group">
                        {this.renderMeals()}
                    </ul>
                </div>
            </div>
            );
    }
}