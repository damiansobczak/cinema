import React, { useEffect, useContext, useState } from "react";
import "./SeatsCart.scss";
import { getSeats } from "../../helpers/seatsAPI";
import { TimelineLite, Power2 } from "gsap";
import { StateContext } from "../../StateContext";

export default function SeatsCart() {
    const { reservation } = useContext(StateContext);
    const elements = [];

    useEffect(() => {
        let myTween = new TimelineLite();
        myTween.staggerFrom(elements, 0.8, { ease: Power2.easeInOut, x: 40, opacity: 0, delay: 0.5 }, 0.07);
    });

    return (
        <div className="seatsCart">
            {}
            {reservation.map((item, index) => (
                <div className="seatsCart__item" key={item.id} ref={el => elements[index] = el}>
                    <button className="seatsCart__close"><span className="icon-x"></span></button>
                    <span className="seatsCart__icon icon-seat"></span>
                    <div className="seatsCart__price">{item.price}</div>
                    <div className="seatsCart__seat">Seat: <span>{item.seat}</span></div>
                    <div className="seatsCart__seat">Row: <span>{item.row}</span></div>
                </div>
            ))}
        </div>
    );
}
