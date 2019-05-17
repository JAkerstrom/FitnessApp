import React, { Component } from 'react';
import DatePicker from '../ViewComponents/DatePicker';
import SelectList from '../ViewComponents/SelectList';
import WorkoutCreateVM from '../Models/WorkoutCreateVM';
import DateService from '../Services/DateService';


export default class WorkoutsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: "",
            starttime: "",
            endtime: "",
            exercises: ""
        }

        this.add = this.add.bind(this);
        this.callback = this.callback.bind(this);
    }

    add(e) {
        e.preventDefault();

        let dates = this.formatDates();

        this.props.add(
            new WorkoutCreateVM(
                dates[0],
                dates[1],
                this.state.exercises
            )
        );
    }

    formatDates() {
        //let date = Date.parse(this.state.date);
        let date = this.state.date;
        return [
            DateService.SetTime(date, this.state.starttime),
            DateService.SetTime(date, this.state.endtime)
        ];
    }

    callback(value, name) {
        if (name == "date") {
            this.setState({
                date: value
            });
        }
        else if (name == "start") {
            this.setState({
                starttime: value
            });
        }
        else if (name == "end") {
            this.setState({
                endtime: value
            });
        }
        else if (name == "exercises") {
            this.setState({
                exercises: value
            });
        }
    }



    render() {
        let cardstyle = {
            height: "100%"
        }

        return (
            <div className="card" style={cardstyle}>
                <div className="card-header text-center">
                    <h2>Registrera träningspass</h2>
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
                            name={"start"}
                            label={"starttid"}
                            type={"time"}
                            callback={this.callback} />
                    </div>
                    <div className="form-group">
                        <DatePicker
                            value={this.state.endtime}
                            name={"end"}
                            label={"sluttid"}
                            type={"time"}
                            callback={this.callback} />
                    </div>
                    <div className="form-group">
                        <SelectList
                            callback={this.callback}
                            items={this.props.selectlist}
                            label="övningar"
                            name="exercises"
                        />
                    </div>
                    <button onClick={this.add}>Spara</button>
                </div>
            </div>
        );
    }
}