import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

import MealsService from '../Services/MealsService';
import ViewContainer from '../ViewComponents/ViewContainer';
import MealsList from '../ViewComponents/MealsList';
import MealsForm from '../ViewComponents/MealsForm';

const dishes = [
    { "id": "1", "name": "Pastasallad" },
    { "id": "2", "name": "Fisksoppa" }];

class FoodConnect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            meals: [],
            dishes: dishes
        }

        this.callback = this.callback.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    callback(meals) {
        this.setState({
            meals: [...meals]
        });
    }

    componentWillMount() {
        MealsService.List(this.props.user.id, this.callback);
    }

    delete(id) {
        MealsService.delete(id);
    }

    add(meal) {
        MealsService.add(this.props.user.id, meal);
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
                            selectlist={dishes}
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
