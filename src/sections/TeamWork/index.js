import React from "react";
import "../../style/Global.css"
import imgBanner from "../../assets/35744 1.webp"
import imgVektor from "../../assets/Vector (1).png"
import Fade from 'react-reveal/Fade';

function TeamWork() {
    return (
        <div>
            <section className="team-work flex justify-center w-full">
                <div className="container">
                    <div className="w-full flex-col md:flex md:flex-row md:justify-between md:py-28">
                        <Fade bottom>
                            <div className="w-full mt-24 mb-5 md:w-1/2 ">
                                <img src={imgBanner} alt=""/>
                            </div>
                        </Fade>
                        <div className="w-full md:w-1/2 md:mt-28 md:ml-32">
                            <Fade bottom>
                                <h2 className="title">We Provide Good Coffee and Healthy Meals</h2>
                            </Fade>
                            <Fade bottom delay={200}>
                                <p className="mt-5">You can explore the menu that we provide with fun and have their own taste
                                    and make your day better.</p>
                            </Fade>
                            <div className="mt-5">
                                <Fade bottom delay={400}>
                                    <div className="flex mt-2">
                                        <img src={imgVektor} alt="Vector" className="w-5 h-5 mr-4"/>
                                        <p>High quality beans</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={400}>
                                    <div className="flex mt-2">
                                        <img src={imgVektor} alt="Vector"  className="w-5 h-5 mr-4"/>
                                        <p>Healthy meals, you can request the ingredients</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={600}>
                                    <div className="flex mt-2">
                                        <img src={imgVektor} alt="Vector"  className="w-5 h-5 mr-4"/>
                                        <p>Chat with our staff to get better experience for ordering</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={800}>
                                    <div className="flex mt-2">
                                        <img src={imgVektor} alt="Vector"  className="w-5 h-5 mr-4"/>
                                        <p>Free member card with a minimum purchase of IDR 200.000.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TeamWork