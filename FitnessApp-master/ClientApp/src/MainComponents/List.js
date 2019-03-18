import React, { Component } from 'react';

export default class List extends React.Component {

    constructor(props) {
        super(props);

        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleDone(event) {
        event.target.firstChild.data = "Done!";
        event.target.className = "btn btn-sm btn-success pull-right";
    }

    render() {
        let btnStyle = {
            backgroundColor: "#a9ccc7",
            marginTop: "25px"
        }
        let liStyle = {
            margin: "10px"
        }
        let ulStyle = {
            backgroundColor: "#a9ccc7"
        }
        let cardStyle = {
            padding: "0px"
        }

        return (

            <div className="card col-6" style={cardStyle}>
                <div className="card-header text-center">
                    <h2>Scheduled Workouts</h2>
                </div>
                <ul className="list-group" style={ulStyle}>
                    {this.props.items.map(item => (
                        <li style={liStyle}
                            key={item.id}
                            className="list-group-item">
                            <div className="row">
                                <div className="col-10 col-sm-8">
                                    <div className="col-12"><p>{item.dateTime}</p></div>
                                    <div className="col-12"><h3>{item.excercise.name}</h3></div>

                                </div>
                                <div className="col-2 col-sm-4">
                                    <button onClick={this.toggleDone} className="btn btn-sm pull-right align-middle" style={btnStyle}>Done?</button>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>

        );
    }
}