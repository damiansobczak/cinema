import React from "react";
import Room from "../Room/Room";
import Films from "../films/Films";
import "./Wrapper.scss";
import { StateContext } from "../../StateContext";
import { Transition } from "react-transition-group";
import { TimelineLite, Power2 } from "gsap";

class Wrapper extends React.Component {
    static contextType = StateContext;
    render() {
        let value = this.context;
        return (
            <StateContext.Consumer>
                {value => (
                    <>
                        <Transition
                            timeout={1000}
                            mountOnEnter
                            unmountOnExit
                            in={value.film}>
                            <Room />
                        </Transition>
                        <Transition
                            timeout={1000}
                            mountOnEnter
                            unmountOnExit
                            in={!value.film}>
                            <Films />
                        </Transition>
                    </>
                )}
            </StateContext.Consumer>
        );
    }
}

export default Wrapper;