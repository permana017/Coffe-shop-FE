import { useState } from "react";
import ClipLoader from "react-spinners/MoonLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Spinner({ size }) {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#6A4029");
    return (
        <div className="sweet-loading">
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={size}
                width={size}
                height={size}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;