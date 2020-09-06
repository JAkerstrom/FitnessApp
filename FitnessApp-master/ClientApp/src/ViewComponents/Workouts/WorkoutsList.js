import React, { Component } from 'react';
import DateService from '../../Services/DateService';

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
                                        <p style={noMargin}>{DateService.DayAsText(item.starttime) + " " + DateService.DayAndMonth(item.starttime)}</p>
                                    </div>
                                    <div className="col-6 col-sm-4 overflow-hidden">
                                        <p style={noMargin}> {DateService.Time(item.starttime)} - {DateService.Time(item.endtime)}</p>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        {this.renderExercises(item)}
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-3  float-right">                                 
                                <button onClick={this.toggleDone} className="btn btn-lg float-right" style={noSidePadding}>
                                    <span className="fas fa-bullseye" />
                                </button>
                                          
                                <button onClick={this.delete} className="btn btn-lg float-right" style={noSidePadding}>
                                    <span className="fa fa-minus-circle"></span>
                                </button>
                            </div>
                        </div>
                    </li>
                ))
            );
        }
        return <li><h3 className="text-center m-3">Inga sparade pass</h3></li>

    }

    renderExercises(item) {

        let style = { paddingTop: "10px", paddingLeft: "0px" };

        if (item.exercises.length > 0) {

            return (
                item.exercises.map(exercise => (
                    <div key={exercise.id} className="col" style={style}>{exercise.name}</div>
                ))
            );
        }
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
                <div className="card-header text-center card-header-yellow">
                    <h2>Bokade pass</h2>
                </div>
                <div style={bodyStyle}>
                    <ul className="list-group">
                        {this.renderWorkouts()}
                    </ul>
                </div>
            </div>
        );
    }
}