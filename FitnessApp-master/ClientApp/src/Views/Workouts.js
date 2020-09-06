import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

import WorkoutsService from '../Services/WorkoutsService';
import ViewContainer from "../ViewComponents/Shared/ViewContainer";
import WorkoutsList from '../ViewComponents/Workouts/WorkoutsList';
import WorkoutsForm from '../ViewComponents/Workouts/WorkoutsForm';

class WorkoutsConnect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            workouts: [],
            exercises: []
        }

        this.serviceCallback = this.serviceCallback.bind(this);
        this.setExerecises = this.setExerecises.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    serviceCallback(workoutslist) {
        this.setState({
            workouts: [...workoutslist]
        });
    }

    setExerecises(exercises) {
        this.setState({
            exercises: [...exercises]
        });
    }

    componentWillMount() {
        WorkoutsService.Exercises(this.props.user.id, this.setExerecises);
        WorkoutsService.List(this.props.user.id, this.serviceCallback);
    }

    delete(id) {
        WorkoutsService.delete(id, this.props.user.id, this.serviceCallback);
    }

    add(workout) {
        WorkoutsService.add(this.props.user.id, workout, this.serviceCallback);
    }

    render() {

        let rowStyle = {
            marginLeft: "0px",
            marginRight: "0px",
            height: "auto"
        }

        let listStyle = {
            padding: "20px",
            height: "auto"
        };

        let formStyle = {
            padding: "20px",
            height: "550px"
        };

        if (this.props.user === "") {
            return (
                <Redirect to={{
                    pathname: "/"
                }}
                />
            );
        }

        return (
            <ViewContainer>
                <div style={rowStyle} className="row">
                    <div style={listStyle} className="col-12 col-lg-8 pull-right">
                        <WorkoutsList
                            items={this.state.workouts}
                            delete={this.delete} />
                    </div>
                    <div style={formStyle} className="col-12 col-lg-4 pull-left">
                        <WorkoutsForm
                            selectlist={this.state.exercises}
                            add={this.add}
                        />
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