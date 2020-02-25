import React from "react";
import "./Cart.scss";
import Reservation from "../reservation/Reservation";
import Payment from "../payment/Payment";
import EmptyCart from "../emptyCart/EmptyCart";
import { StateContext } from "../../StateContext";

class Cart extends React.Component {
    static contextType = StateContext;

    constructor(props, context) {
        super(props, context);
        this.state = { film: context.film }
    }

    render() {
        let value = this.context;
        let getView = () => {
            console.log(value.film);
            if (value.film !== null) {
                return <Reservation />
            }
            if (value.card !== null) {
                return <EmptyCart />
            }
            return <EmptyCart />;
        };
        return (
            <StateContext.Consumer>
                {value => (
                    <div className="cart">
                        {getView()}
                    </div>
                )}
            </StateContext.Consumer>
        );
    }
}

export default Cart;