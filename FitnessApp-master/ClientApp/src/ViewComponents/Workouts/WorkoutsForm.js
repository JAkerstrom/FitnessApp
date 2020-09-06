import React, { Component } from 'react';
import DateTimePicker from '../Shared/DateTimePicker';
import SelectList from '../Shared/SelectList';
import WorkoutCreateVM from '../../Models/WorkoutCreateVM';
import DateService from '../../Services/DateService';
import InputButton from '../Shared/InputButton';
import moment from 'moment';
import 'moment/locale/se';
moment.locale('es');

export default class WorkoutsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            starttime: moment().format('LT'),
            endtime: moment().format('LT'),
            exercises: ""
        }

        this.add = this.add.bind(this);
        this.callback = this.callback.bind(this);
        this.enableClick = this.enableClick.bind(this);
    }


    enableClick() {
        if (this.state.date === "") {
            return true;
        } else if (this.state.starttime === "") {
            return true;
        } else if (this.state.endtime === "") {
            return true;
        } else if (this.state.exercises === "" || this.state.exercises === "0") {
            return true;
        } else {
            return false;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this.enableClick();
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
        let date = moment(this.state.date).format('YYYY-MM-DD');
        return [
            DateService.SetTime(date, this.state.starttime + ':00'),
            DateService.SetTime(date, this.state.endtime + ':00')
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

        let classnames = "btn btn-md m-0";
        let theme = "#cda73c";

        let cardstyle = {
            height: "100%",
            maxWidth: "350px"
        }

        return (
            <div className="card" style={cardstyle}>
                <div className="card-header text-center card-header-yellow">
                    <h2>Nytt pass</h2>
                </div>
                <div className="card-body">
                    <DateTimePicker
                        value={this.state.date}
                        name={"date"}
                        label={"datum"}
                        type={"date"}
                        callback={this.callback} />

                    <DateTimePicker
                        value={this.state.starttime}
                        name={"start"}
                        label={"starttid"}
                        type={"time"}
                        callback={this.callback} />
                    <div className="form-group">
                        <DateTimePicker
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

                    <InputButton theme={theme} class={classnames} clickHandler={this.add} disabled={this.enableClick()} value={"Spara"} />
                </div>
            </div>
        );
    }
}