import React, { useEffect, useState, useContext, useRef } from "react";
import CardImage from "../../assets/images/card.svg";
import "./Card.scss";
import { gsap, TimelineLite, Power2 } from "gsap";
import { StateContext } from "../../StateContext";
import { useHighlightCard } from "../../hooks/useHighlightCard";
import { useCardValidation } from "../../hooks/useCardValidation";

export default function Card() {
    const { fillCard } = useContext(StateContext);
    let { cardPlaceholder, number, owner, date, card } = useRef(null);

    const [highlight, setHighlightPos] = useHighlightCard();
    const [cardInput, setCardInput] = useCardValidation('**** **** **** 0000', 'Jan Kowalski', '05/22');

    useEffect(() => {
        gsap.set(card, { opacity: 1, delay: 0.2 });
        const Tween = new TimelineLite();
        Tween.staggerFrom([cardPlaceholder, number, owner, date], 0.8, { ease: Power2.easeInOut, x: 60, opacity: 0, delay: 0.2 }, 0.05);
    }, []);

    useEffect(() => {
        fillCard({
            number: cardInput.number,
            owner: cardInput.owner,
            date: cardInput.date
        });
    }, [[cardInput.number, cardInput.owner, cardInput.date].join(",")]);

    return (
        <div className="card" ref={e => card = e}>
            <div className="card__placeholder" ref={e => cardPlaceholder = e}>
                <img src={CardImage} alt="Card payment details" className="card__image" />
                <div className="card__number">{cardInput.number}</div>
                <div className="card__owner" >
                    <div className="card__label">Owner</div>
                    <div className="card__value">{cardInput.owner}</div>
                </div>
                <div className="card__expire">
                    <div className="card__label">Expire Date</div>
                    <div className="card__value">{cardInput.date}</div>
                </div>
                <div className="card__highlight" style={highlight}></div>
            </div>

            <div className="card__group" ref={e => number = e}>
                <label htmlFor="card__input">Card Number</label>
                <input id="card__number" type="text" name="cardNumber" className="card__input" onFocus={(e) => setHighlightPos(e)} onChange={e => setCardInput(e)} />
            </div>
            <div className="card__group" ref={e => owner = e}>
                <label htmlFor="card__input">Owner</label>
                <input id="card__owner" type="text" name="cardOwner" className="card__input" onFocus={(e) => setHighlightPos(e)} onChange={e => setCardInput(e)} />
            </div>
            <div className="card__group" ref={e => date = e}>
                <label htmlFor="card__input">Expire Date</label>
                <input id="card__date" type="text" name="cardDate" className="card__input" onFocus={(e) => setHighlightPos(e)} onChange={e => setCardInput(e)} />
            </div>
        </div>
    );
}
