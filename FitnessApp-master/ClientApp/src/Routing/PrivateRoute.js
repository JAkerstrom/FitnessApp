import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            props.user !== "" ? (
                <Component {...props} {...rest} />
            ) : (
                    <Redirect to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                    />
                )}></Route>
);

export default PrivateRoute;