import React from "react";
import "./Film.scss";
import Poster from "../../assets/images/poster.png";
import { StateContext } from "../../StateContext";

class Film extends React.Component {
    render() {
        let value = this.context;
        return (
            <StateContext.Consumer>
                {value => (
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
                                {this.props.showTime.map((time, index) => (<div className="film__hours__time" key={index} onClick={e => value.chooseFilm({ time, ...this.props })}>{time}</div>))}
                            </div>
                        </div>
                    </div>
                )}
            </StateContext.Consumer>
        );
    }
}

export default Film;