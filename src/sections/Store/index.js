import React from "react";
import "src/sections/Store/style.css"
import "src/style/Global.css"
import imgWorld from "src/assets/world-map.webp"

function Store() {
    return (
        <div>
            <section className="map-below">
                <div className="container">
                    <div className="text-head">
                        <h2 className="title tw-500 text-center my-7">Visit Our Store in the Spot on the Map Below</h2>
                        <p className="desc my-3">See our store in every city on the spot and spen your good
                            day there. See you soon!</p>
                    </div>
                    <img src={imgWorld} alt="world-map"/>
                </div>
            </section>
        </div>
    )
}

export default Store