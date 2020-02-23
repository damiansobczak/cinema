import React from "react";
import "./Cart.scss";
import Reservation from "../reservation/Reservation";
import Payment from "../payment/Payment";
import EmptyCart from "../emptyCart/EmptyCart";

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                <EmptyCart />
                {/* <Reservation /> */}
                {/* <Payment /> */}
            </div>
        );
    }
}

export default Cart;