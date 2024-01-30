import React from "react";
import './style.css'

function BtnPrimary(props) {
    const { children, px = "px-2", py = "py-2.5", rounded = "rounded-md", disabled, onClick, type } = props;
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={` bg-orange w-full font-semibold text-brown ${px} ${py} ${rounded}`}
        >
            {children}
        </button>
    );
}

export default BtnPrimary;
