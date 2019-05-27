import React, { Component } from 'react';
import DateService from '../Services/DateService';

export default class WorkoutsList extends React.Component {

    constructor(props) {
        super(props);

        this.toggleDone = this.toggleDone.bind(this);
        this.delete = this.delete.bind(this);
    }

    toggleDone(e) {
        e.target.className = "fas fa-award";
    }

    delete(e) {
        let btn = e.target;
        let workoutid = btn.closest('li').getAttribute("data-index");
        this.props.delete(workoutid);
    }

    renderWorkouts() {
        if (this.props.items.length > 0) {
            return (
                this.props.items.map(item => (
                    <li
                        key={item.id}
                        data-index={item.id}
                        className="list-group-item">
                        <div className="row">
                            <div className="col-3">
                                <h4>{DateService.DayAsText(item.starttime)}, 
                                    {DateService.DayAndMonth(item.starttime)}
                                </h4>
                            </div>
                            <div className="col-3">
                                <p> {DateService.Time(item.starttime)} - {DateService.Time(item.endtime)}</p>
                            </div>
                            <div className="col-3">
                                {this.renderExercises(item)}
                            </div>
                            <div className="col-3">
                                <button onClick={this.toggleDone} className="btn btn-sm">
                                    <span className="fas fa-bullseye" />
                                </button>
                                <button onClick={this.delete} className="btn btn-sm float-right">x</button>
                            </div>
                        </div>
                    </li>
                ))
            );
        }
        return <li><h3 className="text-center">Inga sparade pass</h3></li>

    }

    renderExercises(item) {

        if (item.exercises.length > 0) {

            return (
                item.exercises.map(exercise => (
                    <div key={exercise.id} className="col">{exercise.name}</div>
                ))
            );
        }
    }

    render() {

        let cardstyle = {
            height: "100%"
        }

        return (

            <div className="card" style={cardstyle}>
                <div className="card-header text-center">
                    <h2>Scheduled Workouts</h2>
                </div>
                <ul className="list-group">
                    {this.renderWorkouts()}
                </ul>
            </div>
        );
    }
}