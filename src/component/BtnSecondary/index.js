import React from 'react'

function BtnSecondary(props) {
    const { children, px = "px-2", py = "py-2.5", rounded = "rounded-md", disabled, onClick, type } = props;
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={` bg-brown w-full font-semibold text-white ${px} ${py} ${rounded}`}
        >
            {children}
        </button>
    );
}

export default BtnSecondary