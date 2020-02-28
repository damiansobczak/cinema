import React, { useEffect } from "react";
import "./ReservationSummary.scss";
import { TweenMax, Power2 } from "gsap";

export default function ReservationSummary(props) {
    let ref = React.createRef();

    useEffect(() => {
        TweenMax.from(ref.current, 0.8, { ease: Power2.easeInOut, y: 80, opacity: 0, delay: 0.5 });
    });

    return (
        <div className="reservationSummary" ref={ref}>
            <div className="reservationSummary__details">
                <div className="reservationSummary__label">Total</div>
                <div className="reservationSummary__price">{props.price}</div>
            </div>
            <button className="reservationSummary__btn">{props.action}</button>
        </div>
    );
}
