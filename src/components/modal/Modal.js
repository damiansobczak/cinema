import React from "react";
import "./Modal.scss";
import Image from "../../assets/images/success.svg";

class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <img src={Image} alt="" className="modal__image" />
                <div className="modal__title">Success!</div>
                <div className="modal__info">We’ve sens you an email with tickets and additional payment information.</div>
                <button className="modal__btn">Got it!</button>
            </div>
        );
    }
}

export default Modal;