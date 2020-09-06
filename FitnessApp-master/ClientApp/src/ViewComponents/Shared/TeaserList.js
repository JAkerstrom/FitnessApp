import React, { Component, Fragment } from 'react';
import Card from './Card';

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let divStyle = {
            paddingBottom: "10px"
        }

        return (

            <>
                <div className="col-12 col-md-4" style={divStyle}>
                    <Card src={"/Images/cyan-cooper-1390409-unsplash.jpg"} text={"Vi hjälper dig att hålla koll på dina träningsresultat med hjälp av träningsdagboken."} />
                </div>
                <div className="col-12 col-md-4" style={divStyle}>
                    <Card src={"/Images/athlete1.jpg"} text={"Anpassa din träning genom att ange dina mål och beräkna saker."} />
                </div>
                <div className="col-12 col-md-4" style={divStyle}>
                    <Card src={"/Images/beans-close-up-containers-1640775.jpg"} text={"Matdagboken hjälper dig att beräkna rätt mängd energi och vitaminer du behöver baserat på dina mål."} />
                </div>
            </>
        );
    }
}