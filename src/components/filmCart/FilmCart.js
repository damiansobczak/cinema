import React from "react";
import "./FilmCart.scss";
import Image from "../../assets/images/poster.png";
import { StateContext } from "../../StateContext";

class FilmCart extends React.Component {
    static contextType = StateContext;

    render() {
        let value = this.context;
        return (
            <StateContext.Consumer>
                {value => (
                    <div className="filmCart" ref={this.props.forwardRef}>
                        <img src={value.film.poster ? value.film.poster : Image} className="filmCart__image" />
                        <div className="filmCart__details">
                            <div className="filmCart__title">{value.film.title}</div>
                            <div className="filmCart__date">Date: 30 july 2019 | {value.film.time}</div>
                        </div>
                    </div>
                )}
            </StateContext.Consumer>
        );
    }
}

export default FilmCart;