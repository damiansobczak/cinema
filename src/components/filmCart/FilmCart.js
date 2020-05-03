import React, { useContext, memo } from "react";
import "./FilmCart.scss";
import Image from "../../assets/images/poster.png";
import { StateContext } from "../../StateContext";

export const FilmCart = memo((props) => {
    const { film } = useContext(StateContext);

    return (
        <div className="filmCart" ref={props.forwardRef}>
            <img src={film.poster ? film.poster : Image} alt="" className="filmCart__image" />
            <div className="filmCart__details">
                <div className="filmCart__title">{film.title}</div>
                <div className="filmCart__date">Date: 30 july 2019 | {film.time}</div>
            </div>
        </div>
    );
});
