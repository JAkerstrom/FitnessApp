import React, { Component } from 'react';
import Card from './Card';

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let containerStyle = {
            margin: "20px",
            padding: "0px",
            backgroundColor: "transparent"
        }

        return (

            <div style={containerStyle}>
                <Card src={"/Images/cyan-cooper-1390409-unsplash.jpg"} text={"Vi hjälper dig att hålla koll på dina träningsresultat med hjälp av träningsdagboken."} />
                <Card src={"/Images/athlete1.jpg"} text={"Anpassa din träning genom att ange dina mål och beräkna saker."} />
                <Card src={"/Images/beans-close-up-containers-1640775.jpg"} text={"Matdagboken hjälper dig att beräkna rätt mängd energi och vitaminer du behöver baserat på dina mål."} />
            </div>
        );
    }
}