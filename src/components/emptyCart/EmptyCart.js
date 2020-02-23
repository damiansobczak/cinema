import React from "react";
import "./EmptyCart.scss";
import Image from "../../assets/images/emptyCart.svg";
import { TweenMax, TimelineLite, Power2 } from "gsap";

class EmptyCart extends React.Component {
    constructor(props) {
        super(props);
        this.myTween = new TimelineLite();
    }

    image = React.createRef();
    title = React.createRef();
    info = React.createRef();

    componentDidMount() {
        this.myTween.staggerFrom([this.image, this.title, this.info], 0.8, { ease: Power2.easeInOut, opacity: 0, y: 80 }, 0.04)
    }

    render() {
        return (
            <div className="emptyCart">
                <img src={Image} alt="" className="emptyCart__image" ref={e => this.image = e} />
                <div className="emptyCart__title" ref={e => this.title = e}>Cart is Empty :(</div>
                <div className="emptyCart__info" ref={e => this.info = e}>Select abailable seats to continue</div>
            </div>
        );
    }
}

export default EmptyCart;