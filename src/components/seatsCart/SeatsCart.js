import React from "react";
import "./SeatsCart.scss";

class SeatsCart extends React.Component {
    render() {
        return (
            <div className="seatsCart">
                <div className="seatsCart__item">
                    <button className="seatsCart__close"><span className="icon-x"></span></button>
                    <span className="seatsCart__icon icon-seat"></span>
                    <div className="seatsCart__price">$10</div>
                    <div className="seatsCart__seat">Seat: <span>12</span></div>
                    <div className="seatsCart__seat">Row: <span>7</span></div>
                </div>
                <div className="seatsCart__item">
                    <button className="seatsCart__close"><span className="icon-x"></span></button>
                    <span className="seatsCart__icon icon-seat"></span>
                    <div className="seatsCart__price">$10</div>
                    <div className="seatsCart__seat">Seat: <span>12</span></div>
                    <div className="seatsCart__seat">Row: <span>7</span></div>
                </div>
                <div className="seatsCart__item">
                    <button className="seatsCart__close"><span className="icon-x"></span></button>
                    <span className="seatsCart__icon icon-seat"></span>
                    <div className="seatsCart__price">$10</div>
                    <div className="seatsCart__seat">Seat: <span>12</span></div>
                    <div className="seatsCart__seat">Row: <span>7</span></div>
                </div>
                <div className="seatsCart__item">
                    <button className="seatsCart__close"><span className="icon-x"></span></button>
                    <span className="seatsCart__icon icon-seat"></span>
                    <div className="seatsCart__price">$10</div>
                    <div className="seatsCart__seat">Seat: <span>12</span></div>
                    <div className="seatsCart__seat">Row: <span>7</span></div>
                </div>
            </div>
        );
    }
}

export default SeatsCart;