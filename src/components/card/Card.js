import React, { useEffect, useState, useContext } from "react";
import CardImage from "../../assets/images/card.svg";
import "./Card.scss";
import { gsap, TimelineLite, Power2 } from "gsap";
import { StateContext } from "../../StateContext";

export default function Card(props) {
    const { fillCard } = useContext(StateContext);
    let { cardPlaceholder, number, owner, date, card } = React.createRef();
    let { numberOnCard, ownerOnCard, dateOnCard } = React.createRef();

    const [cardNumber, setCardNumber] = useState('**** **** **** 0000');
    const [cardOwner, setCardOwner] = useState('Jan Kowalski');
    const [cardDate, setCardDate] = useState('05/22');
    const [cardState, setCardState] = useState({});
    const [highlight, setHighlight] = useState({ left: '16px', top: '60px' });

    useEffect(() => {
        gsap.set(card, { opacity: 1, delay: 0.2 });
        const Tween = new TimelineLite();
        Tween.staggerFrom([cardPlaceholder, number, owner, date], 0.8, { ease: Power2.easeInOut, x: 60, opacity: 0, delay: 0.2 }, 0.05);
    }, []);

    useEffect(() => {
        setCardState({
            number: cardNumber,
            owner: cardOwner,
            date: cardNumber
        });
        fillCard(cardState);
    }, [[cardNumber, cardOwner, cardDate].join(",")]);

    return (
        <div className="card" ref={e => card = e}>
            <div className="card__placeholder" ref={e => cardPlaceholder = e}>
                <img src={CardImage} alt="Card payment details" className="card__image" />
                <div className="card__number" ref={e => numberOnCard = e}>{cardNumber}</div>
                <div className="card__owner" >
                    <div className="card__label">Owner</div>
                    <div className="card__value" ref={e => ownerOnCard = e}>{cardOwner}</div>
                </div>
                <div className="card__expire">
                    <div className="card__label">Expire Date</div>
                    <div className="card__value" ref={e => dateOnCard = e}>{cardDate}</div>
                </div>
                <div className="card__highlight" style={highlight}></div>
            </div>

            <div className="card__group" ref={e => number = e}>
                <label htmlFor="card__input">Card Number</label>
                <input id="card__input" type="text" className="card__input" onFocus={() => setHighlight({ left: '16px', top: '60px' })} onChange={e => setCardNumber(e.target.value.replace(/\d{4}(?!$)/gi, '**** '))} />
            </div>
            <div className="card__group" ref={e => owner = e}>
                <label htmlFor="card__input">Owner</label>
                <input id="card__input" type="text" className="card__input" onFocus={() => setHighlight({ left: `16px`, top: `120px`, width: `150px` })} onChange={e => setCardOwner(e.target.value)} />
            </div>
            <div className="card__group" ref={e => date = e}>
                <label htmlFor="card__input">Expire Date</label>
                <input id="card__input" type="text" className="card__input" onFocus={() => setHighlight({ left: `178px`, top: `120px`, width: `70px` })} onChange={e => setCardDate(e.target.value.replace(/(\d{2})\/?(\d{2}).*/, '$1/$2'))} />
            </div>
        </div>
    );
}
