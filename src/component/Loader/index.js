import React from "react";
import './style.css'
function Loader({ size = 20 }) {
    return (
        <div className="lds-ring" style={{ width: size, height: size }}>
            <div style={{ width: size, height: size }}></div>
            <div style={{ width: size, height: size }}></div>
            <div style={{ width: size, height: size }}></div>
            <div style={{ width: size, height: size }}></div>
        </div>
    );
}

export default Loader;
