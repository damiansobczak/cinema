import React, { useEffect, memo } from "react";
import "./RoomLegend.scss";
import { gsap, Power2 } from "gsap";

export const RoomLegend = memo(() => {
    useEffect(() => {
        gsap.from(".room__legend", 0.4, { ease: Power2.easeInOut, y: 10, opacity: 0, delay: 0.8 });
    }, []);

    return (
        <div className="room__legend">
            <div className="room__legend__item room__legend__item--reservation">
                <span className="icon-seat"></span>
                <div className="room__legend__label">Reservation</div>
            </div>
            <div className="room__legend__item">
                <span className="icon-seat"></span>
                <div className="room__legend__label">Available</div>
            </div>
            <div className="room__legend__item room__legend__item--selection">
                <span className="icon-seat"></span>
                <div className="room__legend__label">Selection</div>
            </div>
        </div>
    );
});
