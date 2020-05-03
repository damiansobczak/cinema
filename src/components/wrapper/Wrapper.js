import React, { useContext, useMemo } from "react";
import { Room } from "../room/Room";
import Films from "../films/Films";
import "./Wrapper.scss";
import { StateContext } from "../../StateContext";
import { Transition } from "react-transition-group";

export default function Wrapper() {
    const { film } = useContext(StateContext);

    return useMemo(() => {
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
    }, [film]);
}