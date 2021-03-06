﻿import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import Jumbotron from '../ViewComponents/Shared/Jumbotron';
import TeaserList from '../ViewComponents/Shared/TeaserList';
import FormCard from '../ViewComponents/Shared/FormCard';

class HomeConnect extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let img = "/Images/spencer-davis-1329216-unsplash.jpg";
        let title = "Rubriken först";
        return (
            <>
                <div className="row">
                    <div className="col-12" style={{paddingRight: "0px"}}>
                        {this.props.user === "" ? <Jumbotron redirectPath={"/Register"} /> : <div></div>}
                    </div>
                </div>
                <div className="row">
                    {this.props.user === "" ? <TeaserList /> : <div></div>}
                </div>
                <div className="row" style={{ marginTop: "10px"}}>
                    <div className="col-12">
                        <FormCard img={img} title={title} theme={"black"}>                
                            <p className="card-text p-3">
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <p className="card-text p-3 italic">- Jonny Ponny</p>
                        </FormCard>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

var Home = withRouter(connect(mapStateToProps)(HomeConnect));
export default Home;
   //<img src={image} className="card-img-top" />

//class Home extends Component {

//    constructor(props) {
//        super(props);

//        this.state = {
//            workouts: []
//        }
//    }

//    componentWillMount() {
//        let self = this;

//        axios.get('api/data/userworkouts/' + 1)
//            .then(function (response) {
//                console.log("get", response);
//                self.setState({
//                    workouts: [...response.data.workouts]
//                });
//            })
//            .catch(function (error) {
//                console.log("get", error)
//            });
//    }

//    render() {

//        return (
//            <h1>hej</h1>
//            //<div className="col-12" style={{ padding: "0px" }}>
//            //    <WorkoutsList items={this.state.workouts} />
//            //</div>
//        );
//    }
//}