import React from "react";

export const StateContext = React.createContext({
    modal: false,
    reservation: [],
    film: null,
    card: null,
    payment: false
})