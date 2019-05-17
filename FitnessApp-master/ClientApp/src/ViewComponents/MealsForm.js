import React, { Component } from 'react';
import DateService from '../Services/DateService';
import MealCreateVM from '../Models/MealCreateVM';

import DatePicker from '../ViewComponents/DatePicker';
import SelectList from '../ViewComponents/SelectList';


export default class WorkoutsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: "",
            time: "",
            dishes: ""
        }

        this.add = this.add.bind(this);
        this.callback = this.callback.bind(this);
    }

    add(e) {
        e.preventDefault();

        let date = this.formatDates();

        this.props.add(
            new MealCreateVM(
                date,
                this.state.dishes
            )
        );
    }

    formatDates() {
        let date = this.state.date;
        return DateService.SetTime(date, this.state.time);       
    }

    callback(value, name) {
        if (name == "date") {
            this.setState({
                date: value
            });
        }
        else if (name == "time") {
            this.setState({
                time: value
            });
        }
        else if (name == "dishes") {
            this.setState({
                dishes: value
            });
        }
    }



    render() {

        let cardstyle = {
            height: "100%",
            padding: "20px"
        }

        return (
            <div className="card" style={cardstyle}>
                <div className="card-header text-center">
                    <h2>Registrera måltid</h2>
                </div>
                <div>
                    <div className="form-group">
                        <DatePicker
                            value={this.state.date}
                            name={"date"}
                            label={"datum"}
                            type={"date"}
                            callback={this.callback} />
                    </div>
                    <div className="form-group">
                        <DatePicker
                            value={this.state.starttime}
                            name={"time"}
                            label={"tid"}
                            type={"time"}
                            callback={this.callback} />
                    </div>
                    <div className="form-group">
                        <SelectList
                            name="dishes"
                            label="Maträtter"
                            items={this.props.selectlist}
                            callback={this.callback}
                        />
                    </div>
                    <button onClick={this.add}>Spara</button>
                </div>
            </div>
        );
    }
}