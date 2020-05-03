import React, { useEffect, useContext, memo } from "react";
import "./Room.scss";
import Screen from "../../assets/images/screen.svg";
import { TimelineLite, Power2 } from "gsap";
import { getRoom } from "../../helpers/roomAPI";
import { StateContext } from "../../StateContext";
import { RoomLegend } from "../roomLegend/RoomLegend"
export const Room = memo(() => {
    const { chooseSeat, deleteSeat } = useContext(StateContext);
    const rooms = getRoom();
    const selectSeat = (e) => {
        const target = e.target.offsetParent;
        if (target.classList.contains('room__seat')) {
            target.classList.toggle('room__seat--selected');
            target.classList.contains('room__seat--selected') ? chooseSeat(target.dataset.seat, target.dataset.row) : deleteSeat(target.dataset.seat, target.dataset.row);
        }
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
            .from(".room__wrapper", 1, { ease: Power2.easeInOut, scale: 3 }, "Start");
    }, []);

    let column = 0;
    let row = 1;
    let empty = 0;

    return (
        <div className="room">
            <div className="room__wrapper">
                <img src={Screen} alt="" className="room__screen" />
                <div className="room__seats" onClick={e => selectSeat(e)}>
                    {rooms.map((seat, index) => {
                        column++;
                        if (seat === 0) {
                            empty = empty + 1;
                        }
                        if (index !== 0 && (index) % 22 === 0) {
                            row = row + 1;
                            empty = 0;
                            column = 1;
                        }
                        return (
                            <div className={`room__seat ${seat === 0 ? `room__seat--disabled` : ``}`} data-row={row} data-seat={column - empty} key={index}>
                                <span className="icon-seat"></span>
                            </div>
                        );
                    })}
                </div>
                <RoomLegend />
            </div>
        </div >
    );
});
