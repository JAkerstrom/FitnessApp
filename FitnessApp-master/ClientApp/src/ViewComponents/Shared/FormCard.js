import React from 'react';

export default class FormCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let cardStyle = {
            margin: "20px",
            borderRadius: ".0rem",
            clear: "both",
            padding: "0px",
            border: "none"
        }

        let imgStyle = {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }

        let container = {
            maxHeight: "80vh",
            paddingBottom: '0px'
        }

        return (
            <div className="card" style={cardStyle}>
                <div className="row">
                    <div style={container} className="col-xs-12 col-md-6 float-left">
                        <img src={this.props.img} style={imgStyle}></img>
                    </div>
                    <div className="col-xs-12 col-md-6 float-right" style={container}>
                        <div className="mt-5">
                            <h5 className="card-title pl-3">{this.props.title}</h5>
                            {this.props.children}
                            <br />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}