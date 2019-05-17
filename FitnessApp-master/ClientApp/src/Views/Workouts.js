import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

import WorkoutsService from '../Services/WorkoutsService';
import ViewContainer from "../ViewComponents/ViewContainer";
import WorkoutsList from '../ViewComponents/WorkoutsList';
import WorkoutsForm from '../ViewComponents/WorkoutsForm';

const exercises = [
    {"id" : "1", "name" : "Knäböj" },
    {"id" : "2", "name" : "Armhävningar" },
    {"id" : "3", "name" : "Armhävningar" },
    {"id" : "4", "name" : "Cykling" }];

class WorkoutsConnect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            workouts: [],
            exercises: exercises
        }

        this.callback = this.callback.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    callback(workoutslist) {
        this.setState({
            workouts: [...workoutslist]
        });
    }

    componentWillMount() {
        WorkoutsService.List(this.props.user.id, this.callback);
    }

    delete(id) {
        WorkoutsService.delete(id);
    }

    add(workout) {
        WorkoutsService.add(this.props.user.id, workout);
    }

    hasUser() {
        if (this.props.user === "") {
            return (
                <Redirect to={{
                    pathname: "/"
                }}
                />
            );
        }
    }

    render() {

        this.hasUser()

        let rowStyle = {
            marginLeft: "0px",
            marginRight: "0px",
            height: "auto"
        }

        let divStyle = {
            backgroundColor: "black",
            margin: "0px",
            padding: "20px",
            height: "auto"
        };

        return (
            <ViewContainer>
                <div style={rowStyle} className="row">
                    <div style={divStyle} className="col-md-6 col-xs-12 pull-left">
                        <WorkoutsForm
                            selectlist={exercises}
                            add={this.add}
                        />
                    </div>
                    <div style={divStyle} className="col-md-6 col-xs-12 pull-right">
                        <WorkoutsList
                            items={this.state.workouts}
                            delete={this.delete} />
                    </div>
                </div>
                    
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

var Workouts = withRouter(connect(mapStateToProps)(WorkoutsConnect));
export default Workouts;