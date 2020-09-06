import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        let footerStyle = {
            bottom: 0,
            width: "100%",
            backgroundColor: "black",
            overflow: "hidden"
        };

        return (
            <div className="footer font-small blue pt-4" style={footerStyle}>
                <div className="container-fluid text-center">
                    <p>I am the footer</p>
                </div>
            </div>

            );
        }
    }
        
export default Footer;
        
        
        
        
        
        
        
        
