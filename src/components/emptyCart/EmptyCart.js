import React, { useEffect } from "react";
import "./EmptyCart.scss";
import Image from "../../assets/images/emptyCart.svg";
import { TweenMax, TimelineLite, Power2 } from "gsap";

export default function EmptyCart(props) {
    let { image, title, info } = React.createRef();

    useEffect(() => {
        const myTween = new TimelineLite();
        myTween.staggerFrom([image, title, info], 0.8, { ease: Power2.easeInOut, opacity: 0, y: 80 }, 0.04);
    })

    return (
        <div className="emptyCart">
            <img src={Image} alt="" className="emptyCart__image" ref={e => image = e} />
            <div className="emptyCart__title" ref={e => title = e}>Cart is Empty :(</div>
            <div className="emptyCart__info" ref={e => info = e}>Select available seats to continue</div>
        </div>
    );
}
