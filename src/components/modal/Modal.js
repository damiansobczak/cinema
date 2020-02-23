import React from "react";
import "./Modal.scss";
import Image from "../../assets/images/success.svg";
import { TweenMax, Power2 } from "gsap";

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    modal = React.createRef();

    componentDidMount() {
        TweenMax.from(this.modal, 0.6, { ease: Power2.easeInOut, y: 100, opacity: 0 });
    }

    render() {
        return (
            <div className="modal" ref={e => this.modal = e}>
                <img src={Image} alt="" className="modal__image" />
                <div className="modal__title">Success!</div>
                <div className="modal__info">We’ve send you an email with tickets and additional payment information.</div>
                <button className="modal__btn">Got it!</button>
            </div>
        );
    }
}

export default Modal;