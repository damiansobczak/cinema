import React from "react";
import "./ReservationSummary.scss";

class ReservationSummary extends React.Component {
    render() {
        return (
            <div className="reservationSummary">
                <div className="reservationSummary__details">
                    <div className="reservationSummary__label">Total</div>
                    <div className="reservationSummary__price">{this.props.price}</div>
                </div>
                <button className="reservationSummary__btn">{this.props.action}</button>
            </div>
        );
    }
}

export default ReservationSummary;