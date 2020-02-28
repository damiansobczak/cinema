import React from "react";
import "./Menu.scss";

export default function Menu(props) {
    return (
        <div className="menu">
            <ul className="menu__items">
                <li className="menu__item">
                    <button className="menu__btn menu__btn--active">
                        <span className="icon-home"></span>
                    </button>
                </li>
                <li className="menu__item">
                    <button className="menu__btn">
                        <span className="icon-user"></span>
                    </button>
                </li>
                <li className="menu__item">
                    <button className="menu__btn">
                        <span className="icon-settings"></span>
                    </button>
                </li>
                <li className="menu__item">
                    <button className="menu__btn">
                        <span className="icon-shopping-bag"></span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
