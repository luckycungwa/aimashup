import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Snack = ({ property1, className }) => {
    return (
        <div className={`snack ${property1} ${className}`}>
            <div className="text-wrapper">ReactJS</div>
        </div>
    );
};

Snack.propTypes = {
    property1: PropTypes.oneOf(["hover", "default"]),
};
