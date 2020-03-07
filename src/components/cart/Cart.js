import React, { useContext, useState, useEffect } from "react";
import "./Cart.scss";
import Reservation from "../reservation/Reservation";
import EmptyCart from "../emptyCart/EmptyCart";
import Payment from "../payment/Payment";
import { StateContext } from "../../StateContext";

export default function Cart() {
    const { payment, film } = useContext(StateContext);

    function getView() {
        if (film !== null && payment === false) {
            return <Reservation />
        }
        if (film !== null && payment) {
            return <Payment />
        }
        return <EmptyCart />;
    }

    return (
        <div className="cart">
            {getView()}
        </div>
    );
}
