import React from "react";
import "./Films.scss";
import Film from "../film/Film";
import { TimelineLite, Power2 } from "gsap";
import { getFilms } from "../../helpers/filmsAPI";
import { StateContext } from "../../StateContext";

class Films extends React.Component {
    static contextType = StateContext;

    constructor(props, context) {
        super(props, context);
        this.myTween = new TimelineLite();
        this.elements = [];
        this.state = {
            films: [],
            film: null
        };
    }

    componentDidMount() {
        const films = getFilms();
        this.setState({ films, film: this.context.film });
    }

    componentDidUpdate() {
        const elements = this.elements.map(element => element.current);
        this.myTween.staggerFrom(elements, 0.8, { ease: Power2.easeInOut, y: 40, opacity: 0 }, 0.03);
    }

    render() {
        return (
            <div className="films">
                {this.state.films ? this.state.films.map((film, index) => <Film key={film.id} id={film.id} poster={film.poster} title={film.title} desc={film.desc} duration={film.duration} director={film.director} showTime={film.showTime} forwardRef={() => this.elements[index] = React.createRef()} />) : ''}
            </div>
        );
    }
}

export default Films;