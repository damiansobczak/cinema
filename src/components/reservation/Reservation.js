import React from "react";
import "./Reservation.scss";
import FilmCart from "../filmCart/FilmCart";
import SeatsCart from "../seatsCart/SeatsCart";
import ReservationSummary from "../reservationSummary/ReservationSummary";
import { TimelineLite, TweenMax, Power2 } from "gsap";

class Reservation extends React.Component {
    ref = React.createRef();

    componentDidMount() {
        const Tween = new TimelineLite();
        Tween.staggerFrom('.reservation__label', 0.8, { ease: Power2.easeInOut, x: 60, opacity: 0, delay: 0.2 }, 0.2);
        TweenMax.from(this.ref.current, 0.8, { ease: Power2.easeInOut, x: 50, opacity: 0, delay: 0.3 });
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