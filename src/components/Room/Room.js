import React from "react";
import "./Room.scss";
import Screen from "../../assets/images/screen.svg";

class Room extends React.Component {
    render() {
        let x = [];
        for (let i = 0; i < 220; i++) {
            x.push(i);
        }
        return (
            <div className="room">
                <img src={Screen} alt="" className="room__screen" />
                <div className="room__seats">
                    {x.map(() => (
                        <div className="room__seat" >
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
            </div >
        );
    }
}

export default Room;