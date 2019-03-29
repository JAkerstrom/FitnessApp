import React, { Component } from 'react';

class Home extends React.Component {

    render() {

        let cardStyle = {
            backgroundColor: "#e9ecef",
            borderRadius: ".50rem",
            padding: "10px",
        }

        return (
            <div>
                <h2>Home</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                </ol>
            </div>
        )
    }
}

export default Home;


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