import React from "react";
import "./Card.scss";
import CardImage from "../../assets/images/card.svg";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card__placeholder">
                <img src={CardImage} alt="Card payment details" className="card__image" />
                <div className="card__number">**** **** **** 0000</div>
                <div className="card__owner">
                    <div className="card__label">Owner</div>
                    <div className="card__value">Jan Kowalski</div>
                </div>
                <div className="card__expire">
                    <div className="card__label">Expire Date</div>
                    <div className="card__value">05/22</div>
                </div>
                <div className="card__highlight"></div>
            </div>

            <div className="card__group">
                <label htmlFor="card__input">Card Number</label>
                <input id="card__input" type="text" className="card__input" />
            </div>
            <div className="card__group">
                <label htmlFor="card__input">Owner</label>
                <input id="card__input" type="text" className="card__input" />
            </div>
            <div className="card__group">
                <label htmlFor="card__input">Expire Date</label>
                <input id="card__input" type="text" className="card__input" />
            </div>
        </div>
    );
}
