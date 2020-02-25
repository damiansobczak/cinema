import React from "react";
import "./ReservationSummary.scss";
import { TweenMax, Power2 } from "gsap";

class ReservationSummary extends React.Component {
    ref = React.createRef();

    componentDidMount() {
        TweenMax.from(this.ref.current, 0.8, { ease: Power2.easeInOut, y: 80, opacity: 0 });
    }

    render() {
        return (
            <div className="reservationSummary" ref={this.ref}>
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