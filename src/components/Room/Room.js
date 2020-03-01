import React, { useEffect, useContext } from "react";
import "./Room.scss";
import Screen from "../../assets/images/screen.svg";
import { TimelineLite, Power2 } from "gsap";
import { getRoom } from "../../helpers/roomAPI";
import { StateContext } from "../../StateContext";

export default function Room() {
    const { chooseSeat, deleteSeat } = useContext(StateContext);
    const selectSeat = (e) => {
        const target = e.target.offsetParent;
        if (!target.classList.contains('room__seat')) {
            return;
        }
        target.classList.toggle('room__seat--selected');
        target.classList.contains('room__seat--selected') ? chooseSeat(target.dataset.seat, target.dataset.row) : deleteSeat(target.dataset.seat, target.dataset.row);
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

    const room = getRoom();
    return (
        <div className="room">
            <div className="room__wrapper">
                <img src={Screen} alt="" className="room__screen" />
                <div className="room__seats" onClick={e => selectSeat(e)}>
                    {room.map((seats, row) => {
                        let empty = 0;
                        return seats.map((seat, column) => {
                            if (seat === 0) {
                                empty = empty + 1;
                            }
                            return (
                                <div className={`room__seat ${seat === 0 ? `room__seat--disabled` : ``}`} data-row={row + 1} data-seat={column + 1 - empty} key={column}>
                                    <span className="icon-seat"></span>
                                </div>
                            );
                        })
                    })}
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
