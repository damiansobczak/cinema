import React, { useContext } from "react";
import Room from "../Room/Room";
import Films from "../films/Films";
import "./Wrapper.scss";
import { StateContext } from "../../StateContext";
import { Transition } from "react-transition-group";
import { TimelineLite, Power2 } from "gsap";

export default function Wrapper() {
    const { film } = useContext(StateContext);

    return (
        <>
            <Transition
                timeout={1000}
                mountOnEnter
                unmountOnExit
                in={Boolean(film)}>
                <Room />
            </Transition>
            <Transition
                timeout={1000}
                mountOnEnter
                unmountOnExit
                in={!Boolean(film)}>
                <Films />
            </Transition>
        </>
    );
}