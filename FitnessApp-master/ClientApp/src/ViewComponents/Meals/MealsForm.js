import React, { Component } from 'react';
import DateService from '../../Services/DateService';
import MealCreateVM from '../../Models/MealCreateVM';

import DateTimePicker from '../Shared/DateTimePicker';
import SelectList from '../Shared/SelectList';
import InputButton from '../Shared/InputButton';

import moment from 'moment';
import 'moment/locale/se';
moment.locale('es');


export default class MealsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            time: moment().format('LT'),
            dishes: ""
        }

        this.add = this.add.bind(this);
        this.callback = this.callback.bind(this);
    }

    add(e) {

        let date = this.formatDates();

        this.props.add(
            new MealCreateVM(
                date,
                this.state.dishes
            )
        );
    }

    formatDates() {
        let date = moment(this.state.date).format('YYYY-MM-DD');
        let time = this.state.time +':00';

        return DateService.SetTime(date, time);       
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

        let classnames = "btn btn-md m-0";
        let theme = "#a166d0";

        let cardstyle = {
            height: "100%",
            maxWidth: "350px"
        }

        return (
            <div className="card" style={cardstyle}>
                <div className="card-header text-center card-header-purple">
                    <h2>Ny måltid</h2>
                </div>
                <div className="card-body">
                    <DateTimePicker
                        value={this.state.date}
                        name={"date"}
                        label={"datum"}
                        type={"date"}
                        callback={this.callback} />

                    <DateTimePicker
                        value={this.state.time}
                        name={"time"}
                        label={"tid"}
                        type={"time"}
                        callback={this.callback} />

                    <div className="form-group">
                        <SelectList
                            name="dishes"
                            label="Maträtter"
                            items={this.props.selectlist}
                            callback={this.callback}
                        />
                    </div>

                    <InputButton theme={theme} class={classnames} clickHandler={this.add} disabled={false} value={"Spara"} />
                </div>
            </div>
        );
    }
}