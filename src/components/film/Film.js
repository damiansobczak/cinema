import React from "react";
import "./Film.scss";
import Poster from "../../assets/images/poster.png";

class Film extends React.Component {
    render() {
        return (
            <div className="film" ref={this.props.forwardRef()}>
                <img src={Poster} alt="" className="film__poster" />
                <div className="film__details">
                    <div className="film__title">The Irishman</div>
                    <div className="film__description">April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap. </div>
                    <div className="film__additional">
                        <div className="film__duration">1h 59min</div>
                        <div className="film__director">Martin Scorsese</div>
                    </div>
                    <div className="film__hours">
                        <div className="film__hours__label">Show time</div>
                        <div className="film__hours__time">11:30</div>
                        <div className="film__hours__time">13:30</div>
                        <div className="film__hours__time">18:00</div>
                        <div className="film__hours__time">20:00</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Film;