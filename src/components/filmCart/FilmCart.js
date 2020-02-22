import React from "react";
import "./FilmCart.scss";
import Image from "../../assets/images/poster.png";

class FilmCart extends React.Component {
    render() {
        return (
            <div className="filmCart" ref={this.props.forwardRef}>
                <img src={Image} className="filmCart__image" />
                <div className="filmCart__details">
                    <div className="filmCart__title">The Irishman</div>
                    <div className="filmCart__date">Date: 30 july 2019 | 18:30</div>
                </div>
            </div>
        );
    }
}

export default FilmCart;