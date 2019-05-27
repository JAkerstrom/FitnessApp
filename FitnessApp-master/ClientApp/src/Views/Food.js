import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

import MealsService from '../Services/MealsService';
import ViewContainer from '../ViewComponents/ViewContainer';
import MealsList from '../ViewComponents/MealsList';
import MealsForm from '../ViewComponents/MealsForm';

class FoodConnect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            meals: [],
            dishes: []
        }

        this.serviceCallback = this.serviceCallback.bind(this);
        this.setDishes = this.setDishes.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    serviceCallback(meals) {
        this.setState({
            meals: [...meals]
        });
    }

    setDishes(dishes) {
        this.setState({
            dishes: [...dishes]
        });
    }

    componentWillMount() {
        MealsService.Dishes(this.props.user.id, this.setDishes);
        MealsService.List(this.props.user.id, this.serviceCallback);
    }

    delete(id) {
        MealsService.delete(id, this.props.user.id, this.serviceCallback);
    }

    add(meal) {
        MealsService.add(this.props.user.id, meal, this.serviceCallback);
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
        };

        let divStyle = {
            margin: "0px",
            padding: "20px",
            height: "auto"
        };

        return (
            <ViewContainer>
                <div style={rowStyle} className="row">
                    <div style={divStyle} className="col-md-6 col-xs-12 pull-left">
                        <MealsForm
                            selectlist={this.state.dishes}
                            add={this.add}
                        />
                    </div>
                    <div style={divStyle} className="col-md-6 col-xs-12 pull-right">
                        <MealsList
                            items={this.state.meals}
                            delete={this.delete}
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

var Food = withRouter(connect(mapStateToProps)(FoodConnect));
export default Food;
