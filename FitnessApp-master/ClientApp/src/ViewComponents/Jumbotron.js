import React, { Component } from 'react';
import InputButton from './InputButton';

class Jumbotron extends React.Component {
    render() {

        let btnStyle = {
            color: "white",
            backgroundColor: "black",
            borderRadius: ".0rem",
        };

        let jumbotronStyle = {
            marginBottom: "0px",
            borderRadius: 0,
            backgroundColor: "#FFF"
        }

        let className = "btn btn-lg";
        let theme = "black";
        let btnText = "Läs mer..";

        return (
            <div className="jumbotron" style={jumbotronStyle}>
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <InputButton
                    class={className}
                    clickHandler={(e) => { alert("test"); }}
                    disabled={false}
                    theme={theme}
                    value={btnText}
                />
            </div>
        );
    }
}

export default Jumbotron;