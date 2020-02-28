import React, { useContext } from "react";
import "./Film.scss";
import { StateContext } from "../../StateContext";

export default function Film(props) {
    const { chooseFilm } = useContext(StateContext);

    return (
        <div className="film" ref={props.forwardRef()}>
            <img src={props.poster} alt="" className="film__poster" />
            <div className="film__details">
                <div className="film__title">{props.title}</div>
                <div className="film__description">{props.desc}</div>
                <div className="film__additional">
                    <div className="film__duration">{props.duration}</div>
                    <div className="film__director">{props.director}</div>
                </div>
                <div className="film__hours">
                    <div className="film__hours__label">Show time</div>
                    {props.showTime.map((time, index) => (<div className="film__hours__time" key={index} onClick={e => chooseFilm({ time, ...props })}>{time}</div>))}
                </div>
            </div>
        </div>
    );
}
