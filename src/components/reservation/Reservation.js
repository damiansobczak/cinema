import React from "react";
import "./Reservation.scss";
import FilmCart from "../filmCart/FilmCart";
import SeatsCart from "../seatsCart/SeatsCart";
import ReservationSummary from "../reservationSummary/ReservationSummary";
import { TweenMax, Power2 } from "gsap";

class Reservation extends React.Component {
    ref = React.createRef();

    componentDidMount() {
        TweenMax.from(this.ref.current, 0.8, { ease: Power2.easeInOut, x: 80, opacity: 0 });
    }
    render() {
        return (
            <div className="reservation">
                <div className="reservation__group">
                    <div className="reservation__label">Cart</div>
                    <FilmCart forwardRef={this.ref} />
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