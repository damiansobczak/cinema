import React, { useEffect } from "react";
import "./Room.scss";
import Screen from "../../assets/images/screen.svg";
import { TimelineLite, Power2 } from "gsap";

export default function Room() {
    const selectSeat = (e) => {
        e.target.offsetParent.classList.toggle('room__seat--selected');
    }

    useEffect(() => {
        let Tween = new TimelineLite();
        Tween
            .from(".room__seat", 1, {
                scale: 0.1, opacity: 0, ease: Power2.easeInOut,
                stagger: {
                    amount: 0.3,
                    grid: [10, 22],
                    from: "center"
                }
            }, "Start")
            .from(".room__wrapper", 1, { ease: Power2.easeInOut, scale: 3 }, "Start")
            .from(".room__legend", 0.4, { ease: Power2.easeInOut, y: 10, opacity: 0 }, "Start+=0.8");
    }, []);

    let x = [];
    for (let i = 0; i < 220; i++) {
        x.push(i);
    }
    return (
        <div className="room">
            <div className="room__wrapper">
                <img src={Screen} alt="" className="room__screen" />
                <div className="room__seats" onClick={e => selectSeat(e)}>
                    {x.map((seat, index) => (
                        <div className="room__seat" key={index}>
                            <span className="icon-seat"></span>
                        </div>
                    ))}
                </div>
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
            </div>
        </div >
    );
}
