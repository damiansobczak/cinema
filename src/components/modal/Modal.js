import React, { useEffect } from "react";
import "./Modal.scss";
import Image from "../../assets/images/success.svg";
import { TweenMax, Power2 } from "gsap";

export default function Modal() {
    let modal = React.createRef();

    useEffect(() => {
        TweenMax.from(modal, 0.6, { ease: Power2.easeInOut, y: 100, opacity: 0 });
    });

    return (
        <div className="modal" ref={e => modal = e}>
            <img src={Image} alt="" className="modal__image" />
            <div className="modal__title">Success!</div>
            <div className="modal__info">We’ve send you an email with tickets and additional payment information.</div>
            <button className="modal__btn">Got it!</button>
        </div>
    );
}
