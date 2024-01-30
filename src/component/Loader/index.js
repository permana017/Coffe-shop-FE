import React from "react";
import './style.css'
function Loader({ size = 20, color = '#6a4029' }) {
    return (
        <div className="lds-ring" style={{ width: size, height: size, }}>
            <div style={{ width: size, height: size, borderTopColor: color }}></div>
            <div style={{ width: size, height: size, borderTopColor: color }}></div>
            <div style={{ width: size, height: size, borderTopColor: color }}></div>
            <div style={{ width: size, height: size, borderTopColor: color }}></div>
        </div>
    );
}

export default Loader;
