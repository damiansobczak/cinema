import React, { useEffect, useContext, useState } from "react";
import "./ReservationSummary.scss";
import { TweenMax, Power2 } from "gsap";
import { StateContext } from "../../StateContext";

export default function ReservationSummary(props) {
    let ref = React.createRef();
    const { reservation, choosePayment } = useContext(StateContext);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        TweenMax.from(ref.current, 0.8, { ease: Power2.easeInOut, y: 80, opacity: 0, delay: 0.5 });
    }, []);

    useEffect(() => {
        const newPrice = reservation.reduce((a, reservation) => {
            return Number(a) + Number(reservation.price.replace(/\$/, ''));
        }, 0);
        setPrice(newPrice);
    }, [reservation.join(",")]);

    return (
        <div className="reservationSummary" ref={ref}>
            <div className="reservationSummary__details">
                <div className="reservationSummary__label">Total</div>
                <div className="reservationSummary__price">${price}</div>
            </div>
            <button className="reservationSummary__btn" onClick={e => choosePayment()}>{props.action}</button>
        </div>
    );
}
