import React, { useContext } from "react";
import "./Cart.scss";
import Reservation from "../reservation/Reservation";
import EmptyCart from "../emptyCart/EmptyCart";
import { StateContext } from "../../StateContext";

export default function Cart() {
    const value = useContext(StateContext);
    function getView() {
        if (value.film !== null) {
            return <Reservation />
        }
        if (value.card !== null) {
            return <EmptyCart />
        }
        return <EmptyCart />;
    }
    return (
        <div className="cart">
            {getView()}
        </div>
    );
}
