import React from "react";
import "./Film.scss";
import Poster from "../../assets/images/poster.png";

class Film extends React.Component {
    render() {
        return (
            <div className="film" ref={this.props.forwardRef()}>
                <img src={this.props.poster} alt="" className="film__poster" />
                <div className="film__details">
                    <div className="film__title">{this.props.title}</div>
                    <div className="film__description">{this.props.desc}</div>
                    <div className="film__additional">
                        <div className="film__duration">{this.props.duration}</div>
                        <div className="film__director">{this.props.director}</div>
                    </div>
                    <div className="film__hours">
                        <div className="film__hours__label">Show time</div>
                        {this.props.showTime.map(time => (<div className="film__hours__time">{time}</div>))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Film;