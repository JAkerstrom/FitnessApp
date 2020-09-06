import React, { Component, Fragment } from 'react';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';


export default class DateTimePicker extends React.Component {

    constructor(props) {
        super(props);
        console.log("time",this.props.value);
        this.change = this.change.bind(this);
    }

    change(value) {
        this.props.callback(value, this.props.name);
    }


    render() {

        //return (
        //    <div className="form-group">
        //        <label>{this.props.label}</label>
        //        <input
        //            value={this.props.value}
        //            type={this.props.type}
        //            className="form-control"
        //            onChange={this.change} />
        //    </div>
        //);
        if (this.props.type === 'time') {
            return (
                <div className="form-group">
                    <label>{this.props.label}</label>
                    <TimePicker
                        disableClock={true}
                        clockIcon={null}
                        className={'react-time-picker'}
                        onChange={this.change}
                        value={this.props.value}
                    />
                </div>
            );
        } else {
            return (
                <div className="form-group">
                    <label>{this.props.label}</label>
                    <DatePicker
                        calendarIcon={null}
                        format={'y-MM-dd'}
                        className={'react-date-picker'}
                        onChange={this.change}
                        value={this.props.value}
                    />
                </div>
            );
        }



    }
}