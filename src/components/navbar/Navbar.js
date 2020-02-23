import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import Avatar from "../../assets/images/avatar.png";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="navbar__logo" src={Logo} alt="Cinema Studio" />
                <div className="navbar__search">Search for movie</div>
                <div className="navbar__actions">
                    <button className="navbar__contact">Contact us</button>
                    <button className="navbar__notification">
                        <span className="icon-bell"></span>
                    </button>
                    <button className="navbar__profile">
                        <img src={Avatar} alt="User profile" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Navbar;