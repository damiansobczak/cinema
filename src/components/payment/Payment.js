import React from "react";
import "./Payment.scss";
import ReservationSummary from "../reservationSummary/ReservationSummary";
import Card from "../card/Card";

class Payment extends React.Component {
    render() {
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
}

export default Payment;