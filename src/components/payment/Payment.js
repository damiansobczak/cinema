import React, { useEffect } from "react";
import "./Payment.scss";
import ReservationSummary from "../reservationSummary/ReservationSummary";
import Card from "../card/Card";
import { TweenMax, Power2 } from "gsap";

export default function Payment() {
    let label = React.createRef();

    useEffect(() => {
        TweenMax.from(label, 0.7, { ease: Power2.easeInOut, x: 60, opacity: 0 });
    }, []);
    return (
        <div className="payment">
            <div className="payment__group">
                <div className="payment__label" ref={e => label = e}>Payment</div>
                <Card />
            </div>
            <ReservationSummary action="Pay now!" price="$20" />
        </div>
    );
}
