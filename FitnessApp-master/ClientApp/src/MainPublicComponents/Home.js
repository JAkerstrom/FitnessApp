import React, { Component } from 'react';

class Home extends React.Component {

    render() {

        let cardStyle = {
            backgroundColor: "#e9ecef",
            borderRadius: ".50rem",
            padding: "10px",
        }

        return (
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <h2>Home</h2>
                    <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
                    <ol>
                        <li>Nulla pulvinar diam</li>
                        <li>Facilisis bibendum</li>
                        <li>Vestibulum vulputate</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Home;