import React from "react";
import "./Payment.scss";
import ReservationSummary from "../reservationSummary/ReservationSummary";
import Card from "../card/Card";

export default function Payment() {
    return (
        <div className="payment">
            <div className="payment__group">
                <div className="payment__label">Payment</div>
                <Card />
            </div>
            <ReservationSummary action="Pay now!" price="$20" />
        </div>
    );
}
