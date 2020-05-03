import React, { memo } from "react";
import "./Breadcrumbs.scss";

export const Breadcrumbs = memo(() => {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__indicator">You are here <span className="icon-arrow-right"></span> </div>
            <div className="breadcrumbs__menu">
                <div className="breadcrumbs__item breadcrumbs__item--active">Choose seats <span className="icon-chevron-right"></span></div>
                <div className="breadcrumbs__item">Payment</div>
            </div>
        </div>
    );
});
