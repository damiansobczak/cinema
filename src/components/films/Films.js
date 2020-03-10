import React, { useContext, useEffect, useState, useRef } from "react";
import "./Films.scss";
import Film from "../film/Film";
import { TweenMax, TimelineLite, Power2 } from "gsap";
import { getFilms } from "../../helpers/filmsAPI";
import { StateContext } from "../../StateContext";

export default function Films(props) {
    const [state, setState] = useState({ films: [], film: null });
    const { film } = useContext(StateContext);
    const films = useRef(null);
    let elements = [];
    let myTween = new TimelineLite();

    useEffect(() => {
        const films = getFilms();
        setState({ films, film });
    }, []);

    useEffect(() => {
        if (film) {
            TweenMax.to(films.current, 0.8, { ease: Power2.easeInOut, scale: 0.2, opacity: 0 });
        } else if (!film) {
            const filmElements = elements.map(element => element.current);
            myTween.staggerFrom(filmElements, 0.8, { ease: Power2.easeInOut, y: 40, opacity: 0 }, 0.03);
        }
    });

    return (
        <div className="films" ref={films}>
            {state.films ? state.films.map((film, index) => <Film key={film.id} id={film.id} poster={film.poster} title={film.title} desc={film.desc} duration={film.duration} director={film.director} showTime={film.showTime} forwardRef={() => elements[index] = React.createRef()} />) : ''}
        </div>
    );
}
