import React from "react";
import "./Cart.scss";
import Reservation from "../reservation/Reservation";
import Payment from "../payment/Payment";

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                {/* <Reservation /> */}
                <Payment />
            </div>
        );
    }
}

export default Cart;