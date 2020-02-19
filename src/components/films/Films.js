import React from "react";
import "./Films.scss";
import Film from "../film/Film";

class Films extends React.Component {
    render() {
        return (
            <div className="films">
                <Film />
                <Film />
                <Film />
                <Film />
            </div>
        );
    }
}

export default Films;