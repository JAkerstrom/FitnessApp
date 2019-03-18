import React, { Component } from 'react';
import axios from "axios";
import List from './MainComponents/List';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            workouts: []
        }
    }

    componentWillMount() {
        let self = this;

        axios.get('api/data/userworkouts/' + 1)
            .then(function (response) {
                console.log("get", response);
                self.setState({
                    workouts: [...response.data.workouts ]
                });
            })
            .catch(function (error) {
                console.log("get", error)
            });
    }

    render() {

        return (
            <div className="col-12" style={{padding: "0px"}}>
                <List items={this.state.workouts} />
            </div>
        );
    }
}

export default Home;