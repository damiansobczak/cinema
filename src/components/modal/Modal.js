import React, { useEffect, useRef, useContext } from "react";
import "./Modal.scss";
import Image from "../../assets/images/success.svg";
import { Power2, TimelineLite } from "gsap";
import { StateContext } from "../../StateContext";

export default function Modal() {
    let { modalRef, modalWrapperRef } = useRef(null);
    const { toggleModal } = useContext(StateContext);

    useEffect(() => {
        const Tween = new TimelineLite();
        Tween.from(modalWrapperRef, 0.3, { ease: Power2.easeInOut, opacity: 0 })
            .from(modalRef, 0.4, { ease: Power2.easeInOut, y: 30, opacity: 0 }, "-=0.15");
    }, []);

    return (
        <div className="modal__wrapper" ref={e => modalWrapperRef = e}>
            <div className="modal" ref={e => modalRef = e}>
                <img src={Image} alt="" className="modal__image" />
                <div className="modal__title">Success!</div>
                <div className="modal__info">We’ve send you an email with tickets and additional payment information.</div>
                <button className="modal__btn" onClick={() => toggleModal()}>Got it!</button>
            </div>
        </div>
    );
}
