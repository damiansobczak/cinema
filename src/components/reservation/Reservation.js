import React from "react";
import "./Reservation.scss";
import FilmCart from "../filmCart/FilmCart";
import SeatsCart from "../seatsCart/SeatsCart";
import ReservationSummary from "../reservationSummary/ReservationSummary";

class Reservation extends React.Component {
    render() {
        return (
            <div className="reservation">
                <div className="reservation__group">
                    <div className="reservation__label">Cart</div>
                    <FilmCart />
                </div>
                <div className="reservation__group">
                    <div className="reservation__label">Seats</div>
                    <SeatsCart />
                </div>
                <ReservationSummary action="Payment" price="$20" />
            </div>
        );
    }
}

export default Reservation;