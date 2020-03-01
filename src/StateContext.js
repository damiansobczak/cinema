import React from "react";

export const StateContext = React.createContext({
    success: false,
    reservation: [],
    film: null,
    card: null,
    payment: false
})