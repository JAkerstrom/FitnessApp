import React, { Component } from 'react';

class Jumbotron extends React.Component {
    render() {
        let btnStyle = {
            backgroundColor: "#8cb0b0"
        };

        return (
            <div className="jumbotron" style={{ marginBottom: "0px" }}>
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-sm" style={btnStyle} href="#" role="button">Learn more</a>
            </div>
        );
    }
}

export default Jumbotron;