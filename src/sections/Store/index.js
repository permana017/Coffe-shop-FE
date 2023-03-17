import React from "react";
import "src/sections/Store/style.css"
import "src/style/Global.css"
import imgWorld from "src/assets/world-map.webp"
import Fade from 'react-reveal/Fade';

function Store() {
    return (
        <div>
            <section className="map-below">
                <div className="container">
                    <div className="text-head">
                        <Fade bottom  >
                            <h2 className="md:text-5xl font-bold text-3xl w-full md:w-1/2 text-center md:my-7">Visit Our Store in the Spot on the Map Below</h2>
                        </Fade>
                        <Fade bottom delay={200}>
                            <p className="text-md text-[#4F5665] my-3 w-full text-center md:w-1/2">See our store in every city on the spot and spen your good
                                day there. See you soon!</p>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <img src={imgWorld} alt="world-map"/>
                    </Fade>
                </div>
            </section>
        </div>
    )
}

export default Store