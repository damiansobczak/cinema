import React from "react";
import "./SeatsCart.scss";
import { getSeats } from "../../helpers/seatsAPI";
import { TimelineLite, Power2 } from "gsap";
import { StateContext } from "../../StateContext";

class SeatsCart extends React.Component {
    static contextType = StateContext;

    constructor(props, context) {
        super(props, context);
        this.myTween = new TimelineLite();
        this.elements = [];
        this.state = { seats: [] };
    }

    componentDidMount() {
        const seats = getSeats();
        this.setState({ seats });
    }

    componentDidUpdate() {
        this.myTween.staggerFrom(this.elements, 0.8, { ease: Power2.easeInOut, x: 40, opacity: 0, delay: 0.5 }, 0.07);
    }

    render() {
        return (
            <div className="seatsCart">
                {this.state.seats.map((item, index) => (
                    <div className="seatsCart__item" key={item.id} ref={el => this.elements[index] = el}>
                        <button className="seatsCart__close"><span className="icon-x"></span></button>
                        <span className="seatsCart__icon icon-seat"></span>
                        <div className="seatsCart__price">{item.price}</div>
                        <div className="seatsCart__seat">Seat: <span>{item.seat}</span></div>
                        <div className="seatsCart__seat">Row: <span>{item.row}</span></div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SeatsCart;